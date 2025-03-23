/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

// 全局装饰器，确保所有组件都在 Radix Theme 内渲染
export const decorators = [
  (Story) => (
    <Theme appearance="light" scaling="100%">
      <Story />
    </Theme>
  ),
];
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;