import { type ChangeEvent, type FormEvent, type JSX, useState } from 'react';
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
import { maskDateInput } from '~/widgets/form/utils.ts';
import { categoryChips } from '~/data.ts';
import classes from './formWidget.module.css';
import type { ConsumptionForm } from '~/types.ts';

const FormWidget = (): JSX.Element => {
  const [data, setData] = useState<ConsumptionForm>({
    description: '',
    category: null,
    date: null,
    sum: null,
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({
      ...data,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <WidgetLayout>
      <Box component='form' className={classes['form-widget']} onSubmit={handleSubmit}>
        <Typography variant='h2'>{text.widget.form.title}</Typography>

        <FormControl onChange={handleChange}>
          <FormLabel htmlFor='description' className={classes.label}>
            {text.widget.form.label.description}
          </FormLabel>
          <TextField
            required
            id='description'
            name='description'
            size='small'
            value={data.description}
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
                    className={data.category === cat.value ? classes['radio-selected'] : undefined}
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
            placeholder={text.widget.form.placeholder.sum}
          />
        </FormControl>

        <Button type='submit' className={classes.submit}>
          {text.widget.form.submit}
        </Button>
      </Box>
    </WidgetLayout>
  );
};

export { FormWidget };
