import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import { text } from '~/text.ts';
import classes from './emptyWidget.module.css';

const EmptyWidget = (): JSX.Element => {
  return (
    <WidgetLayout>
      <div className={classes.content}>{text.widget.empty}</div>
    </WidgetLayout>
  );
};

export { EmptyWidget };
