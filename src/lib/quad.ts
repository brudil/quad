import {Issue, LinearClient} from '@linear/sdk'
import {execSync} from 'node:child_process'
import {readFile, writeFile} from 'node:fs/promises'
import {homedir} from 'node:os'
import * as path from 'node:path'

interface Config {
  token: string;
}

interface Cache {
  branchNames: Record<string, string>;
}

export class Quad {
  private config: null | Config = null;
  private cache: Cache = {branchNames: {}};
  private _linearClient: null | LinearClient = null;

  async setup(): Promise<void> {
    await this.loadConfig()

    await this.loadCache()

    this._linearClient = new LinearClient({
      apiKey: this.config?.token,
    })
  }

  auth(token: string): void {
    this.config = {token}
  }

  async getIssue(id: string): Promise<Issue> {
    const issue = await this.linear.issue(id)
    this.cacheAddIssue(issue)

    return issue
  }

  cacheAddIssue(issue: Issue): void {
    this.cache.branchNames[issue.branchName] = issue.id
  }

  get linear(): LinearClient {
    if (this._linearClient === null) {
      throw new Error('Linear Client is not setup')
    }

    return this._linearClient
  }

  async saveConfig(): Promise<void> {
    const file = path.join(homedir(), 'quad-config.json')

    await writeFile(file, JSON.stringify(this.config), {encoding: 'utf-8'})
  }

  async loadConfig(): Promise<void> {
    const file = path.join(homedir(), 'quad-config.json')

    const res = await readFile(file, {encoding: 'utf-8'})

    this.config = JSON.parse(res)
  }

  async saveCache(): Promise<void> {
    const file = path.join(homedir(), 'quad-cache.json')

    await writeFile(file, JSON.stringify(this.cache), {encoding: 'utf-8'})
  }

  async loadCache(): Promise<void> {
    const file = path.join(homedir(), './quad-cache.json')

    try {
      const res = await readFile(file, {encoding: 'utf-8'})

      this.cache = JSON.parse(res)
    } catch {
      // we continue as it's already set
    }
  }

  async getBranchIssue(): Promise<Issue | null> {
    const branchName = execSync('git branch --show-current').toString().trim()

    if (Object.hasOwnProperty.call(this.cache.branchNames, branchName)) {
      return this.getIssue(this.cache.branchNames[branchName])
    }

    return null
  }

  async persist(): Promise<void> {
    await Promise.all([this.saveCache(), this.saveConfig()])
  }
}
