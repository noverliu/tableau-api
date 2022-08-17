export const randomId = (): string => {
  const uint32 = crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
};

export const randomId4 = (): string => {
  const uint32 = crypto.getRandomValues(new Uint16Array(1))[0];
  return uint32.toString(16);
};
