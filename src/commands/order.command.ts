import { Command, CommandRunner } from 'nest-commander';
import { ReprocessOrderCommand } from '@sub-commands/order';

@Command({
  name: 'order',
  description: 'handle orders',
  subCommands: [ReprocessOrderCommand],
})
export class OrderCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('order command');
    console.log('inputs', inputs);
    console.log('options', options);
  }
}
