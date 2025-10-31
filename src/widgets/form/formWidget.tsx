import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
//import classes from './tableIWidget.module.css';

const FormWidget = (): JSX.Element => {
  return (
    <WidgetLayout>
      <>form widget</>
    </WidgetLayout>
  );
};

export { FormWidget };
