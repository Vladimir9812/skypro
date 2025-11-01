import type { Category } from '~/data.ts';

type Consumption = {
  id: string;
  description: string;
  category: Category;
  date: string;
  sum: number;
};

export type { Consumption };
