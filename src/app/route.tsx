import { createBrowserRouter, redirect } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const module = await import('~/app/layout/layout');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import('~/pages/main/mainPage.tsx');
          return { Component: module.default };
        },
      },
      {
        path: '/analyze',
        lazy: async () => {
          const module = await import('~/pages/analyze/analyzePage.tsx');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: '*',
    loader: async () => {
      return redirect('/');
    },
  },
]);

export { router };
