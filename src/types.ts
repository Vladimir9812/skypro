import type { Category } from '~/data.ts';
import type { Dayjs } from 'dayjs';
import type { FunctionComponent } from 'react';

type Option<T extends string = string> = {
  label: string;
  value: T;
};

type Chip<T extends string = string> = {
  label: string;
  value: T;
  icon: FunctionComponent;
};

type Consumption = {
  id: string;
  description: string;
  category: Category;
  date: Dayjs;
  sum: number;
};

type ConsumptionForm = {
  description: string;
  category: Category | null;
  date: Dayjs | null;
  sum: number | null;
};

export type { Consumption, ConsumptionForm, Option, Chip };
