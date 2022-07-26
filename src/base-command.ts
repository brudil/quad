import {Command} from '@oclif/core'
import {Quad} from './lib'

export default abstract class BaseCommand extends Command {
  protected quad = new Quad();

  async init(): Promise<void> {
    await this.quad.setup()
  }

  async finally(): Promise<void> {
    await this.quad.persist()
  }
}
