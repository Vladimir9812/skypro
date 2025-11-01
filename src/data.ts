import { text } from '~/text.ts';

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

export { Category, categoriesOptions, sortOptions };
