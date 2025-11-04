import type { SyntheticEvent } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

const maskDateInput = (e: SyntheticEvent) => {
  let value = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 8);
  if (value.length >= 5) value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1.$2.$3');
  else if (value.length >= 3) value = value.replace(/(\d{2})(\d{0,2})/, '$1.$2');
  (e.target as HTMLInputElement).value = value;
};

const getDateByString = (str: string): Dayjs => {
  const [day, month, year] = str.split('.');
  return dayjs(`${month}.${day}.${year}`);
};

export { maskDateInput, getDateByString };
