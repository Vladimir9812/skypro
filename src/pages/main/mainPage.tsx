import type { JSX } from 'react';
import { LayoutPage } from '~/pages/layout/layoutPage.tsx';
import { text } from '~/text.ts';
import { TableWidget } from '~/widgets/table/tableWidget.tsx';
import { FormWidget } from '~/widgets/form/formWidget.tsx';
import classes from './mainPage.module.css';

const MainPage = (): JSX.Element => {
  return (
    <LayoutPage title={text.title.myExpenses}>
      <div className={classes['main-page']}>
        <TableWidget />
        <FormWidget />
      </div>
    </LayoutPage>
  );
};

export default MainPage;
