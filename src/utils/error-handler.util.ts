import { ErrorHandler } from 'nest-commander/src/command-factory.interface';

export const errorHandlerUtil: ErrorHandler = (err: any) => {
  if (err.code === 'commander.version') return;
  console.error(err);
};
