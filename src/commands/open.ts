import * as http from 'node:http'
import BaseCommand from '../base-command'

export default class Open extends BaseCommand {
  static description = 'Opens the current branch issue in Linear'

  static examples = [
    `$ quad open
`,
  ]

  static flags = {};

  static args = []

  async run(): Promise<void> {
    const issue = await this.quad.getBranchIssue()

    if (!issue) {
      console.log('Failed to find issue for this branch');
      this.exit(1)
    }

    const req = http.request(`http://127.0.0.1:44450/linear/open-url?url=${issue?.url}&userId=${(await this.quad.linear.viewer).id}`)

    req.end()
  }
}
