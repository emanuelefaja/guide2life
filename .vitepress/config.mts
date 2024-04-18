import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "How To Live.",
  description: "Structured guide to living well.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/introduction' }
      ],

    sidebar: [
      {
        text: 'Start Here',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'FAQ', link: '/faq' },
          { 
            text: 'New Item',
            collapsed: true,
            items: [
              { text: 'Subitem 1', link: '/subitem1' },
              { text: 'Subitem 2', link: '/subitem2' }
            ]
          }
        ]
      },
      {
        text: 'Develop Wisdom',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/markwn-examples' },
          { text: 'Good Starting Habits', link: '/markd-examples' },
          { text: 'Setting Habits', link: '/api-examps' },
          { text: 'Tracking Habits', link: '/api-exples' }
        ]
      },
      {
        text: 'Create Habits',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/markdownxamples' },
          { text: 'Good Starting Habits', link: '/markdown-exples' },
          { text: 'Setting Habits', link: '/api-exames' },
          { text: 'Tracking Habits', link: '/api-exales' }
        ]
      },
      
      {
        text: 'Decide Rationally',
        collapsed: true,
        items: [
          { text: 'The Types of Decisions', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
        text: 'Cultivate Relationships',
        collapsed: true,
        items: [
          { text: 'The Types of Decisions', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
        text: 'Embrace Growth',
        collapsed: true,
        items: [
          { text: 'The Types of Decisions', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
      text: 'Manage Time',
        collapsed: true,
        items: [
          { text: 'The Types of Decisions', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
      text: 'Practice Mindfullness',
        collapsed: true,
        items: [
          { text: 'The Types of Decisions', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
        text: 'Build Wealth',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/markdownxamples' },
          { text: 'Good Starting Habits', link: '/markdown-exples' },
          { text: 'Setting Habits', link: '/api-exames' },
          { text: 'Tracking Habits', link: '/api-exales' }
        ]
      },
      {
        text: 'Optimize Health',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/markdownxamples' },
          { text: 'Good Starting Habits', link: '/markdown-exples' },
          { text: 'Setting Habits', link: '/api-exames' },
          { text: 'Tracking Habits', link: '/api-exales' }
        ]
      },
    ],
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
