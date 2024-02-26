import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'setup',
  description: 'setup the CLI to start using it',
})
export class SetupCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('SetupCommand');
    console.log('inputs', inputs);
    console.log('options', options);
    const workingDir = process.cwd();
    console.log('workingDir', workingDir);
  }
}
