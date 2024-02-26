export const isValidOrderId = (id: string): boolean => {
  return id.endsWith('-01');
};
