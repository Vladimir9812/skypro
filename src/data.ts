import { text } from '~/text.ts';
import type { Consumption } from '~/types.ts';
import { v4 as uuidv4 } from 'uuid';

enum Category {
  food,
  transport,
  house,
  entertainment,
  education,
  other,
}

enum Sort {
  asc = 'asc',
  desc = 'desc',
}

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
    date: '03.07.2024',
    sum: 3250,
  },
  {
    id: uuidv4(),
    description: 'Яндекс Такси',
    category: Category.transport,
    date: '03.07.2024',
    sum: 780,
  },
  {
    id: uuidv4(),
    description: 'Клининг',
    category: Category.house,
    date: '03.07.2024',
    sum: 2780,
  },
  {
    id: uuidv4(),
    description: 'Аптека Вита',
    category: Category.other,
    date: '03.07.2024',
    sum: 60,
  },
  {
    id: uuidv4(),
    description: 'Бургер Кинг',
    category: Category.food,
    date: '02.07.2024',
    sum: 2500,
  },
  {
    id: uuidv4(),
    description: 'Деливери',
    category: Category.food,
    date: '02.07.2024',
    sum: 6400,
  },
  {
    id: uuidv4(),
    description: 'Кофейня №1',
    category: Category.food,
    date: '02.07.2024',
    sum: 1200,
  },
  {
    id: uuidv4(),
    description: 'Netflix',
    category: Category.entertainment,
    date: '01.07.2024',
    sum: 499,
  },
  {
    id: uuidv4(),
    description: 'Кино',
    category: Category.entertainment,
    date: '29.06.2024',
    sum: 750,
  },
  {
    id: uuidv4(),
    description: 'Пятерочка',
    category: Category.food,
    date: '26.06.2024',
    sum: 3050,
  },
  {
    id: uuidv4(),
    description: 'Яндекс Такси',
    category: Category.transport,
    date: '23.06.2024',
    sum: 500,
  },
  {
    id: uuidv4(),
    description: 'Кофейня №1',
    category: Category.food,
    date: '22.06.2024',
    sum: 400,
  },
];

export { Category, categoriesOptions, sortOptions, consumptions };
