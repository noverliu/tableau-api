export const sizeToStr = (v: string | number, uom: string = 'px') => {
  if (typeof v !== 'string') {
    return `${v}${uom}`;
  }
  return v;
};
