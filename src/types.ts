import type { Category } from '~/data.ts';
import type { Dayjs } from 'dayjs';

type Consumption = {
  id: string;
  description: string;
  category: Category;
  date: Dayjs;
  sum: number;
};

export type { Consumption };
