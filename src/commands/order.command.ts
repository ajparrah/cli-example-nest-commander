import { Command, CommandRunner } from 'nest-commander';
import { ReprocessCommand } from '@sub-commands';

@Command({
  name: 'order',
  subCommands: [ReprocessCommand],
})
export class OrderCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('order command');
    console.log('inputs', inputs);
    console.log('options', options);
  }
}
