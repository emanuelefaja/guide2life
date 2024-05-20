import { h } from 'vue';

import type { Theme as ThemeConfig } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './vars.css';

// Enhance Readability
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
  NolebaseEnhancedReadabilitiesPlugin,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';

// Inline Link Preview
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp({ app }) {
    app.use(NolebaseInlineLinkPreviewPlugin);
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      layoutSwitch: {
        disableHelp: true,
      },
      spotlight: {
        disableHelp: true,
        hoverBlockColor: 'rgb(0 160 210 / 15%)',
      },
    });
  },
};

export default Theme;
