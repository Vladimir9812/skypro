import { text } from '~/text.ts';
import type { Consumption } from '~/types.ts';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

enum Category {
  food = '1',
  transport = '2',
  house = '3',
  entertainment = '4',
  education = '5',
  other = '6',
}

enum Sort {
  asc = 'asc',
  desc = 'desc',
}

const categoriesMapping = {
  [Category.food]: text.category.food,
  [Category.transport]: text.category.transport,
  [Category.house]: text.category.house,
  [Category.entertainment]: text.category.entertainment,
  [Category.education]: text.category.education,
  [Category.other]: text.category.other,
};

const categoriesOptions = [
  { label: text.category.all, value: '' },
  { label: text.category.food, value: Category.food },
  { label: text.category.transport, value: Category.transport },
  { label: text.category.house, value: Category.house },
  { label: text.category.entertainment, value: Category.entertainment },
  { label: text.category.education, value: Category.education },
  { label: text.category.other, value: Category.other },
];

const sortOptions = [
  { label: text.sort.default, value: '' },
  { label: text.sort.asc, value: Sort.asc },
  { label: text.sort.desc, value: Sort.desc },
];

const consumptions: Consumption[] = [
  {
    id: uuidv4(),
    description: 'Пятерочка',
    category: Category.food,
    date: dayjs('2024-07-03'),
    sum: 3250,
  },
  {
    id: uuidv4(),
    description: 'Клининг',
    category: Category.house,
    date: dayjs('2024-07-03'),
    sum: 2780,
  },
  {
    id: uuidv4(),
    description: 'Аптека Вита',
    category: Category.other,
    date: dayjs('2024-07-03'),
    sum: 60,
  },
  {
    id: uuidv4(),
    description: 'Аптека Вита',
    category: Category.other,
    date: dayjs('2024-07-03'),
    sum: 60,
  },
  {
    id: uuidv4(),
    description: 'Бургер Кинг',
    category: Category.food,
    date: dayjs('2024-07-02'),
    sum: 2500,
  },
  {
    id: uuidv4(),
    description: 'Деливери',
    category: Category.food,
    date: dayjs('2024-07-02'),
    sum: 6400,
  },
  {
    id: uuidv4(),
    description: 'Кофейня №1',
    category: Category.food,
    date: dayjs('2024-07-02'),
    sum: 1200,
  },
  {
    id: uuidv4(),
    description: 'Яндекс Такси',
    category: Category.transport,
    date: dayjs('2024-07-03'),
    sum: 780,
  },
  {
    id: uuidv4(),
    description: 'Netflix',
    category: Category.entertainment,
    date: dayjs('2024-07-01'),
    sum: 499,
  },
  {
    id: uuidv4(),
    description: 'Кино',
    category: Category.entertainment,
    date: dayjs('2024-06-29'),
    sum: 750,
  },
  {
    id: uuidv4(),
    description: 'Яндекс Такси',
    category: Category.transport,
    date: dayjs('2024-06-23'),
    sum: 500,
  },
  {
    id: uuidv4(),
    description: 'Кофейня №1',
    category: Category.food,
    date: dayjs('2024-06-22'),
    sum: 400,
  },
];

export { Category, Sort, categoriesOptions, categoriesMapping, sortOptions, consumptions };
