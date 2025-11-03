import type { FormEvent, JSX } from 'react';
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

const FormWidget = (): JSX.Element => {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <WidgetLayout>
      <Box component='form' className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h2'>{text.widget.form.title}</Typography>

        <FormControl>
          <FormLabel htmlFor='description' className={classes.label}>
            {text.widget.form.label.description}
          </FormLabel>
          <TextField
            id='description'
            name='description'
            size='small'
            placeholder={text.widget.form.placeholder.description}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='category' className={classes.label}>
            {text.widget.form.label.category}
          </FormLabel>
          <RadioGroup id='category' name='category' className={classes['radio-group']}>
            {categoryChips.map((cat) => (
              <FormControlLabel
                key={cat.label}
                value={cat.value}
                control={<Radio sx={{ display: 'none' }} />}
                label={<Chip icon={cat.icon && <cat.icon />} label={cat.label} clickable />}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='date' className={classes.label}>
            {text.widget.form.label.date}
          </FormLabel>
          <TextField
            id='date'
            name='date'
            size='small'
            placeholder={text.widget.form.placeholder.date}
            required
            onInput={maskDateInput}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='description' className={classes.label}>
            {text.widget.form.label.sum}
          </FormLabel>
          <TextField
            id='sum'
            name='sum'
            size='small'
            type='number'
            placeholder={text.widget.form.placeholder.sum}
            required
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
