import { AddProfileOptions } from '@interfaces/options/sub-commands';
import { CommandRunner, Option, SubCommand } from 'nest-commander';

@SubCommand({
  name: 'add',
  description: 'add profile to CLI',
})
export class AddProfileSubCommand extends CommandRunner {
  @Option({
    name: 'name',
    required: true,
    flags: '-n, --name <string>',
    description: 'Profile name',
  })
  parseName(orderId: string): string {
    return orderId;
  }

  @Option({
    name: 'path',
    required: true,
    flags: '-p, --path <string>',
    description: 'Profile path config, for example: /home/user/.staging',
  })
  parsePathConfig(pathConfig: string): string {
    return pathConfig;
  }

  async run(inputs: string[], options: AddProfileOptions): Promise<void> {
    console.log('Add profile command');
    console.log('inputs', inputs);
    console.log('options', options);
  }
}
