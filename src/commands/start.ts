import {execSync} from 'node:child_process'
import BaseCommand from '../base-command'

export default class Start extends BaseCommand {
  static description = 'Switches to working on a new issue'

  static examples = [
    `$ quad start ISS-832
`,
  ]

  static flags = {};

  static args = [{name: 'id', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Start)

    const issue = await this.quad.getIssue(args.id)

    const assignee = await issue.assignee

    if (assignee && !assignee.isMe) {
      console.log(`This issue is already assigned to ${assignee.name}`)
      this.exit(1)
    }

    if (!assignee) {
      console.log('This issue has now been assigned to you.')
      await this.quad.linear.issueUpdate(issue.id, {assigneeId: (await this.quad.linear.viewer).id})
    }

    execSync(`git checkout -b ${issue.branchName}`)

    console.log(`Now working on ${issue.title}`)
  }
}
