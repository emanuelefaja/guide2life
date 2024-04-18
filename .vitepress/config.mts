import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls:true,
  title: "Guide2Life",
  description: "Structured guide to living well.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
          provider: 'local'
        },
    nav: [
      { text: 'Guide', link: '/start/introduction' }
      ],

    sidebar: [
      {
        text: 'Start Here',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/start/introduction' },
          { text: 'FAQ', link: '/start/faq' },
          { text: 'Your Attention is Your Life', link: '/start/faq' },
          { text: 'Growth Mindset', link: 'start/growth-mindset' },
          { text: 'Recommended Books', link: '/start/books' }
        ]
      },
      {
        text: 'Develop Wisdom',
        collapsed: true,
        items: [
          { text: 'What is Wisdom?', link: '/markwn-examples' },
          { text: 'Continuous Education', link: '/markwn-examples' },
          { text: 'Socratic Reasoning', link: '/markd-examples' },
          { text: 'Conquering Desire', link: '/api-examps' },
          { text: 'Keep a Journal', link: '/api-exples' },
          { text: 'Travel', link: '/api-exples' },
          { text: 'On Control', link: '/markd-examples' },
          {"text": "Main Philosophies",
            "collapsed": true,
            "items": [
              { "text": "Stoicism", "link": "/stoicism" },
              { "text": "Epicureanism", "link": "/epicureanism" },
              { "text": "Existentialism", "link": "/existentialism" },
              { "text": "Utilitarianism", "link": "/utilitarianism" },
              { "text": "Confucianism", "link": "/confucianism" },
              { "text": "Buddhism", "link": "/buddhism" },
              { "text": "Platonism", "link": "/platonism" },
              { "text": "Nihilism", "link": "/nihilism" }
            ]
          },
        ]
      },
      {
        text: 'Create Habits',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/habits/importance-of-habits' },
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
      text: 'Manage Time',
        collapsed: true,
        items: [
          { text: 'Mono Task', link: '/markdown-amples' },
          { text: 'Pomodoro Technique', link: '/time/pomodoro' }
        ]
      },
      {
      text: 'Practice Mindfullness',
        collapsed: true,
        items: [
          { text: 'Meditation', link: '/markdown-amples' },
          { text: 'Work Deeply', link: '/api-exples' }
        ]
      },
      {
        "text": "Build Wealth",
        "collapsed": true,
        "items": [
          { "text": "What is Wealth?", "link": "/wealth/what-is-wealth" },
          { "text": "Good Starting Habits", "link": "/markdown-exples" },
          { "text": "Setting Habits", "link": "/api-exames" },
          {
            "text": "On Business",
            "collapsed": true,
            "items": [
              { "text": "The Importance of Habits", "link": "/markdownxamples" },
              { "text": "Good Starting Habits", "link": "/markdown-exples" },
              { "text": "Setting Habits", "link": "/api-exames" }
            ]
          }
        ]
      },
      {
        text: 'Optimize Health',
        collapsed: true,
        items: [
          { text: 'What is health?', link: 'health/what-is-health' },
          { text: 'Non-Communicable Diseases', link: '/health/non-communicable-diseases'},
          { text: 'Metabolic Syndrome', link: '/health/non-communicable-diseases'},
          { text: 'Hormones', link: '/health/non-communicable-diseases'},
          { text: 'Diet', link: '/markdownxamples' },
          { text: 'Exercise', link: '/markdown-exples' },
          { text: 'Addictions', link: '/api-exames' },
          { text: 'Mental Health', link: '/api-exales' }
        ]
      },
      {
        text: 'Common Problems',
        collapsed: true,
        items: [
          { text: 'What is health?', link: 'health/what-is-health' },
          { text: 'Non-Communicable Diseases', link: '/health/non-communicable-diseases'},
          { text: 'Metabolic Syndrome', link: '/health/non-communicable-diseases'},
          { text: 'Hormones', link: '/health/non-communicable-diseases'},
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

