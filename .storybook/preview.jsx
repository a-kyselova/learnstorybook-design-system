
 import { Global } from '@emotion/react';
 import { GlobalStyle } from '../src/shared/global';
 import { themes } from '@storybook/theming';

/** @type { import('@storybook/react').Preview } */
const preview = {
 decorators: [
   (Story) => (
     <>
       <Global styles={GlobalStyle} />
       <Story />
     </> 
   ),
 ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark'  // Set the initial theme
    }
  },
  tags: ['autodocs']
};

export default preview;