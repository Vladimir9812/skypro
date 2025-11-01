import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { text } from '~/text.ts';
import { categoriesMapping, categoriesOptions, consumptions, sortOptions } from '~/data.ts';
import Edit from '~/assets/edit.svg?react';
import Delete from '~/assets/bag.svg?react';
import classes from './tableWidget.module.css';

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
              {consumptions.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ minWidth: 150 }}>{row.description}</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>{categoriesMapping[row.category]}</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>{row.date}</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>{row.sum + ' ₽'}</TableCell>
                  <TableCell align='right'>
                    <Button className={classes['action-btn']} endIcon={<Edit />} />
                    <Button className={classes['action-btn']} startIcon={<Delete />} />
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
