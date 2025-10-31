declare module 'vite-plugin-eslint';

declare module 'postcss-import' {
  export default function postCssImportPlugin(): AcceptedPlugin;
}

declare module 'postcss-css-variables' {
  export default function postCssVariablesPlugin(): AcceptedPlugin;
}
