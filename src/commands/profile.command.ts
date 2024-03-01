import { Command, CommandRunner } from 'nest-commander';
import { AddProfileSubCommand } from '@sub-commands/profile';

@Command({
  name: 'profile',
  description: 'profile to use on CLI',
  subCommands: [AddProfileSubCommand],
})
export class ProfileCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('profile command');
    console.log('inputs', inputs);
    console.log('options', options);
  }
}
