import BaseCommand from '../base-command'

export default class Transfer extends BaseCommand {
  static description = 'Duplicate issues from one team to another'

  static examples = [
    `$ quad transfer --team platform RD-482 RD-324 RD-382
`,
  ]

  static args = [{name: 'key', description: 'Your API key', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Transfer);

    this.log('Auth saved.')
  }
}
