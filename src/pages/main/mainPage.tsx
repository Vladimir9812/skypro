import { type JSX, useState } from 'react';
import { LayoutPage } from '~/pages/layout/layoutPage.tsx';
import { text } from '~/text.ts';
import { TableWidget } from '~/widgets/table/tableWidget.tsx';
import { FormWidget } from '~/widgets/form/formWidget.tsx';
import type { Consumption } from '~/types.ts';
import { consumptions } from '~/data.ts';
import classes from './mainPage.module.css';

const MainPage = (): JSX.Element => {
  const [data, setData] = useState<Consumption[]>(consumptions);
  const [editedItem, setEditedItem] = useState<Consumption | null>(null);

  const handleCreateItem = (item: Consumption): void => {
    setData((data) => [item, ...data]);
  };

  const handleEditItem = (item: Consumption): void => {
    setData((data) => data.map((it) => (it.id === item.id ? item : it)));
    setEditedItem(null);
  };

  const handleDeleteItem = (item: Consumption): void => {
    setData((data) => data.filter((it) => it.id !== item.id));
  };

  return (
    <LayoutPage title={text.title.myExpenses}>
      <div className={classes['main-page']}>
        <TableWidget data={data} onEdit={setEditedItem} onDelete={handleDeleteItem} />
        <FormWidget editedItem={editedItem} onEdit={handleEditItem} onCreate={handleCreateItem} />
      </div>
    </LayoutPage>
  );
};

export default MainPage;
