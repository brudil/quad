import {Flags} from '@oclif/core'
import {readFile} from 'node:fs/promises'
import * as path from 'node:path'
import BaseCommand from '../base-command'
import {createFlagger} from '../lib'

const withFlags = createFlagger('team')

export default class Bulk extends BaseCommand {
  static description = 'Bulk import issues'

  static examples = [
    `$ quad bulk -f issues.txt --team platform
`,
  ]

  static flags = {
    ...withFlags.flags,
    file: Flags.string({char: 'f', required: true}),
  };

  static args = []

  async run(): Promise<void> {
    const {flags} = await this.parse(Bulk)
    const foundFlags = await withFlags.parse(this.quad.linear, flags)

    const file = await readFile(path.resolve(flags.file), {encoding: 'utf-8'})

    const issueTitles = file.trim().split('\n').map(s => s.trim())

    await Promise.all(issueTitles.map(title => {
      return this.quad.linear.issueCreate({
        ...foundFlags,
        title,
      })
    }))
  }
}
