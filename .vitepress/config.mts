import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "How To Live.",
  description: "A structured guide to living well.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/introduction' }
      ],

    sidebar: [
      {
        text: 'Start Here',
        collapsed:false,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
