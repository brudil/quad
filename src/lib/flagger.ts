import {LinearClient} from '@linear/sdk'
import {Flags} from '@oclif/core'
import {AlphabetLowercase, AlphabetUppercase} from '@oclif/core/lib/interfaces'

type FlaggerOptions = 'project' | 'team';

const flagger: Record<FlaggerOptions, { char: AlphabetLowercase | AlphabetUppercase, output: string, get(client: LinearClient, value: string): Promise<{ status: 'ok', value: string } | { status: 'err', message: string }>}> = {
  project: {
    char: 'p',
    output: 'projectId',
    async get(client, value: unknown) {
      console.log(await client.projects())
      return {status: 'err', message: 'Could not find project'}
    },
  },
  team: {
    char: 't',
    output: 'teamId',
    async get(client, value: string) {
      const teams = await client.teams();
      const foundTeam = teams.nodes.find(team => team.name.toLowerCase().trim() === value.toLowerCase().trim());
      if (!foundTeam) {
        return {status: 'err', message: 'Could not find team'}
      }

      return {status: 'ok', value: foundTeam.id};
    },
  },

}

export function createFlagger<F extends keyof typeof flagger>(...flags: F[]) {
  return {
    flags: Object.fromEntries(flags.map(curr => [curr, Flags.string({char: flagger[curr].char})])),
    parse: async function (client: LinearClient, input: any): Promise<Record<`${F}Id`, string>> {
      const res = (await Promise.all(flags.filter(flag => flag in input).map(async (flagName): Promise<{ status: 'ok', flagName: FlaggerOptions,  result: unknown } | { status: 'err', flagName: FlaggerOptions, result: { message: string }}> => {
        const flaggerField = flagger[flagName]

        const flagRes = await flaggerField.get(client, input[flagName])

        if (flagRes.status === 'ok') {
          return {status: 'ok', flagName, result: flagRes.value}
        }

        return {status: 'err', flagName, result: flagRes}
      })))

      const failed = res.filter(r => r.status === 'err')
      if (failed.length > 0) {
        for (const r of failed) {
          if (r.status === 'err') {
            console.log('❌ ' + r.result.message)
          }
        }
        // eslint-disable-next-line no-process-exit,unicorn/no-process-exit
        process.exit(1)
      }

      return Object.fromEntries(res.map(flag => {
        const flaggerField = flagger[flag.flagName]

        return [flaggerField.output as any, flag.result]
      }))
    },
  }
}
