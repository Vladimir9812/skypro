import type { FormEvent, JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { text } from '~/text.ts';
import classes from './formWidget.module.css';
import { maskDateInput } from '~/widgets/form/utils.ts';
import { consumptions } from '~/data.ts';
import Delete from '~/assets/bag.svg?react';

const FormWidget = (): JSX.Element => {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <WidgetLayout>
      <Box component='form' className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h2'>{text.widget.form.title}</Typography>

        <FormControl variant='standard'>
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

        <FormControl fullWidth>
          <FormLabel htmlFor='category' className={classes.label}>
            {text.widget.form.label.category}
          </FormLabel>

          <FormGroup id='category'>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {consumptions.map((cat) => (
                <Chip key={cat.id} icon={<Delete />} label={cat.sum} clickable />
              ))}
            </Box>
          </FormGroup>
        </FormControl>

        <FormControl variant='standard'>
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

        <FormControl variant='standard'>
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
