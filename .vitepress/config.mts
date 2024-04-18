import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls:true,
  title: "How To Live.",
  description: "Structured guide to living well.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
          provider: 'local'
        },
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
        ]
      },
      {
        text: 'Develop Wisdom',
        collapsed: true,
        items: [
          { text: 'What is Wisdom?', link: '/markwn-examples' },
          { text: 'Socratic Reasoning', link: '/markd-examples' },
          { text: 'Conquering Desire', link: '/api-examps' },
          { text: 'Keep a Journal', link: '/api-exples' }
        ]
      },
      {
        text: 'Create Habits',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/markdownxamples' },
          { text: 'Goals vs Identity', link: '/markdownxamples' },
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
          { text: 'Decision Making Processes', link: '/api-exples' },
          { text: 'Reviewing Past Decisions', link: '/api-exples' },
          { text: 'The Washington Post Test', link: '/api-exples' },
          { text: 'Criminality', link: '/api-exples' }
        ]
      },
      {
        text: 'Cultivate Relationships',
        collapsed: true,
        items: [
          { text: 'Learn to listen', link: '/markdown-amples' },
          { text: 'Be Charitable', link: '/api-exples' }
        ]
      },
      {
        text: 'Embrace Growth',
        collapsed: true,
        items: [
          { text: 'Growth Mindset', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
      text: 'Manage Time',
        collapsed: true,
        items: [
          { text: 'Mono Task', link: '/markdown-amples' },
          { text: 'Decision Making Processes', link: '/api-exples' }
        ]
      },
      {
      text: 'Practice Mindfullness',
        collapsed: true,
        items: [
          { text: 'Meditation', link: '/markdown-amples' },
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
          { text: 'What is health?', link: 'health/what-is-health' },
          { text: 'Non-Communicable Diseases', link: '/markdownxamples' },
          { text: 'Diet', link: '/markdownxamples' },
          { text: 'Exercise', link: '/markdown-exples' },
          { text: 'Addictions', link: '/api-exames' },
          { text: 'Mental Health', link: '/api-exales' }
        ]
      },
    ],
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/emanuelefaja/howtolive' }
    ]
  }
})

