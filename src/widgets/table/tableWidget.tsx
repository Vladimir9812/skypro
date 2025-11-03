import { type JSX, useEffect, useState } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { text } from '~/text.ts';
import {
  categoryMapping,
  categoryOptions,
  Category,
  consumptions,
  Sort,
  sortOptions,
} from '~/data.ts';
import Edit from '~/assets/edit.svg?react';
import Delete from '~/assets/bag.svg?react';
import type { Consumption } from '~/types.ts';
import classes from './tableWidget.module.css';

const TableWidget = (): JSX.Element => {
  const [data, setData] = useState<Consumption[]>(consumptions);

  const [dateSort, setDateSort] = useState<Sort | ''>('');
  const [categoryId, setCategoryId] = useState<Category | ''>('');
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  useEffect(() => {
    const isAsc = dateSort === Sort.asc;

    setData(
      consumptions
        .filter((it) => !deletedIds.includes(it.id))
        .filter((it) => (categoryId ? it.category === categoryId : true))
        .toSorted((a, b) => {
          if (a.date.isBefore(b.date)) return dateSort ? (isAsc ? 1 : -1) : 0;
          if (a.date.isAfter(b.date)) return dateSort ? (isAsc ? -1 : 1) : 0;
          return 0;
        }),
    );
  }, [categoryId, dateSort, deletedIds]);

  // функция фильтрации по категории
  const handleFilter = ({ target }: SelectChangeEvent): void => {
    setCategoryId(target.value as Category);
  };

  // функция сотрировки по дате
  const handleSort = ({ target }: SelectChangeEvent): void => {
    setDateSort(target.value as Sort);
  };

  // функция удаления
  const handleDelete = (item: Consumption): void => {
    setDeletedIds((ids) => [...ids, item.id]);
  };

  return (
    <WidgetLayout>
      <div className={classes['table-widget']}>
        <div className={classes.header}>
          <Typography variant='h2' className={classes.title}>
            {text.widget.table.title}
          </Typography>

          <FormControl variant='standard'>
            <InputLabel htmlFor='category' className={classes.label}>
              {text.widget.table.filter}
            </InputLabel>
            <Select
              value={categoryId}
              name='category'
              variant='standard'
              sx={{ minWidth: 190 }}
              onChange={handleFilter}
            >
              {categoryOptions.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant='standard'>
            <InputLabel htmlFor='date' className={classes.label}>
              {text.widget.table.sort}
              <span className={classes['label-subtext']}>{text.widget.table.sortItem}</span>
            </InputLabel>
            <Select
              value={dateSort}
              name='date'
              variant='standard'
              sx={{ minWidth: 150 }}
              onChange={handleSort}
            >
              {sortOptions.map((sort) => (
                <MenuItem key={sort.value} value={sort.value}>
                  {sort.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>{text.widget.table.columns.description}</TableCell>
                <TableCell>{text.widget.table.columns.category}</TableCell>
                <TableCell>{text.widget.table.columns.date}</TableCell>
                <TableCell>{text.widget.table.columns.sum}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ minWidth: 150 }}>{row.description}</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>{categoryMapping[row.category]}</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>{row.date.format('DD.MM.YYYY')}</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>{row.sum + ' ₽'}</TableCell>
                  <TableCell align='right'>
                    <Button className={classes['action-btn']} endIcon={<Edit />} />
                    <Button
                      className={classes['action-btn']}
                      startIcon={<Delete />}
                      onClick={() => handleDelete(row)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </WidgetLayout>
  );
};

export { TableWidget };
