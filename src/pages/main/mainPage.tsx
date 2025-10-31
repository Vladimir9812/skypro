import type { JSX } from 'react';
import { LayoutPage } from '~/pages/layout/layoutPage.tsx';
import { text } from '~/text.ts';

const MainPage = (): JSX.Element => {
  return (
    <LayoutPage title={text.title.myExpenses}>
      <div>fesefe</div>
    </LayoutPage>
  );
};

export default MainPage;
