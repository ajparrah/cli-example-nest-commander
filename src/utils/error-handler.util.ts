import { ErrorHandler } from 'nest-commander/src/command-factory.interface';

export const errorHandlerUtil: ErrorHandler = (err: any) => {
  const exceptions = ['commander.help', 'commander.version'];
  const isAnException = exceptions.includes(err.code);
  const isExitCodeZero = err.exitCode === 0;
  if (isAnException || isExitCodeZero) return;
  console.error(err);
};
