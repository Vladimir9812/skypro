import type { JSX } from 'react';
import { LayoutPage } from '~/pages/layout/layoutPage.tsx';
import { text } from '~/text.ts';
import { EmptyWidget } from '~/widgets/empty/emptyWidget.tsx';

const AnalyzePage = (): JSX.Element => {
  return (
    <LayoutPage title={text.title.analyzeExpenses}>
      <EmptyWidget />
    </LayoutPage>
  );
};

export default AnalyzePage;
