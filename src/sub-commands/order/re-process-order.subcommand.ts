import { ReProcessOptions } from '@interfaces/options/sub-commands';
import { OrderService } from '../../services/order.service';
import { CommandRunner, Option, SubCommand } from 'nest-commander';
import { isValidOrderId } from '@utils';

@SubCommand({
  name: 're-process',
  aliases: ['rp', 'reprocess'],
  description: 'Reprocesa una orden',
})
export class ReprocessOrderCommand extends CommandRunner {
  constructor(private readonly orderService: OrderService) {
    super();
    console.log('ReprocessCommand', orderService);
  }

  @Option({
    name: 'id',
    required: true,
    flags: '-i, --id <string>',
    description: 'Order id',
  })
  parseOrderId(orderId: string): string {
    return orderId;
  }

  async run(inputs: string[], options: ReProcessOptions): Promise<void> {
    console.log('Reprocess command');
    console.log('inputs', inputs);
    console.log('options', options);
    const isValidId = isValidOrderId(options.id);
    if (!isValidId) {
      console.log(
        'Make sure you are trying to re-process a valid order. Id must the suffix -01',
      );
      return;
    }
    await this.orderService.reProcess(options.id);
  }
}
