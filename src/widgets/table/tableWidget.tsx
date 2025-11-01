import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import classes from './tableWidget.module.css';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { text } from '~/text.ts';
import { categoriesOptions, sortOptions } from '~/data.ts';

const TableWidget = (): JSX.Element => {
  return (
    <WidgetLayout>
      <div className={classes['table-widget']}>
        <div className={classes.header}>
          <Typography variant='h2' className={classes.title}>
            {text.widget.table.title}
          </Typography>

          <FormControl variant='standard'>
            <InputLabel id='categoryLabel'>{text.widget.table.filter}</InputLabel>
            <Select
              labelId='categoryLabel'
              name='category'
              variant='standard'
              sx={{ minWidth: 190 }}
            >
              {categoriesOptions.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant='standard'>
            <InputLabel id='dateLabel'>
              {text.widget.table.sort}
              <span className={classes.label}>{text.widget.table.sortItem}</span>
            </InputLabel>
            <Select labelId='dateLabel' name='date' variant='standard' sx={{ minWidth: 150 }}>
              {sortOptions.map((sort) => (
                <MenuItem key={sort.value} value={sort.value}>
                  {sort.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </WidgetLayout>
  );
};

export { TableWidget };
