import BaseCommand from '../base-command'

export default class Auth extends BaseCommand {
  static description = 'Set your token'

  static examples = [
    `$ quad auth 843h98rhhohwe90hjf
`,
  ]

  static args = [{name: 'key', description: 'Your API key', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Auth);

    await this.quad.auth(args.key)

    this.log('Auth saved.')
  }

}
