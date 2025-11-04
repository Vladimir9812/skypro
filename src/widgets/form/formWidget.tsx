import { type ChangeEvent, type FormEvent, type JSX, useEffect, useState } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { text } from '~/text.ts';
import { getDateByString, maskDateInput } from '~/widgets/form/utils.ts';
import { categoryChips } from '~/data.ts';
import classes from './formWidget.module.css';
import type { Consumption, ConsumptionForm } from '~/types.ts';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  editedItem: Consumption | null;
  onEdit: (item: Consumption) => void;
  onCreate: (item: Consumption) => void;
};

const initialForm: ConsumptionForm = {
  description: '',
  category: null,
  date: '',
  sum: '',
};

const FormWidget = ({ editedItem, onEdit, onCreate }: Props): JSX.Element => {
  const [formData, setFormData] = useState<ConsumptionForm>(initialForm);

  useEffect(() => {
    if (editedItem)
      setFormData({
        ...editedItem,
        sum: editedItem.sum.toString(),
        date: editedItem.date.format('DD.MM.YYYY'),
      });
  }, [editedItem]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormData((data) => ({
      ...data,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const item: Consumption = {
      id: formData.id ?? uuidv4(),
      category: formData.category!,
      description: formData.description,
      sum: Number(formData.sum),
      date: getDateByString(formData.date),
    };

    if (editedItem) {
      onEdit(item);
    } else {
      onCreate(item);
    }

    setFormData(initialForm);
  };

  return (
    <WidgetLayout>
      <Box component='form' className={classes['form-widget']} onSubmit={handleSubmit}>
        <Typography variant='h2'>
          {editedItem ? text.widget.form.edit : text.widget.form.title}
        </Typography>

        <FormControl onChange={handleChange}>
          <FormLabel htmlFor='description' className={classes.label}>
            {text.widget.form.label.description}
          </FormLabel>
          <TextField
            required
            id='description'
            name='description'
            size='small'
            value={formData.description}
            placeholder={text.widget.form.placeholder.description}
          />
        </FormControl>

        <FormControl onChange={handleChange}>
          <FormLabel htmlFor='category' className={classes.label}>
            {text.widget.form.label.category}
          </FormLabel>
          <RadioGroup id='category' name='category' className={classes['radio-group']}>
            {categoryChips.map((cat) => (
              <FormControlLabel
                key={cat.label}
                value={cat.value}
                control={<Radio sx={{ display: 'none' }} />}
                label={
                  <Chip
                    icon={cat.icon && <cat.icon />}
                    className={
                      formData.category === cat.value ? classes['radio-selected'] : undefined
                    }
                    label={cat.label}
                    clickable
                  />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl onChange={handleChange}>
          <FormLabel htmlFor='date' className={classes.label}>
            {text.widget.form.label.date}
          </FormLabel>
          <TextField
            required
            id='date'
            name='date'
            size='small'
            value={formData.date}
            placeholder={text.widget.form.placeholder.date}
            onInput={maskDateInput}
          />
        </FormControl>

        <FormControl onChange={handleChange}>
          <FormLabel htmlFor='sum' className={classes.label}>
            {text.widget.form.label.sum}
          </FormLabel>
          <TextField
            required
            id='sum'
            name='sum'
            size='small'
            type='number'
            value={formData.sum}
            placeholder={text.widget.form.placeholder.sum}
          />
        </FormControl>

        <Button type='submit' className={classes.submit}>
          {editedItem ? text.widget.form.edit : text.widget.form.submit}
        </Button>
      </Box>
    </WidgetLayout>
  );
};

export { FormWidget };
