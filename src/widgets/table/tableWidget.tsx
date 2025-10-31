import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
//import classes from './tableWidget.module.css';

const TableWidget = (): JSX.Element => {
  return (
    <WidgetLayout>
      <>table widget</>
    </WidgetLayout>
  );
};

export { TableWidget };
