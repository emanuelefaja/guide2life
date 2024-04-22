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
          { text: 'How To Use This', link: '/start/how-to-use-this' },
          { text: 'Life Audit', link: '/start/life-audit' },
          { text: 'FAQ', link: '/start/faq' },
          { text: 'Your Attention is Your Life', link: '/start/faq' },
          { text: 'Growth Mindset', link: 'start/growth-mindset' },
          { text: 'Recommended Books', link: '/start/books' }
        ]
      },
      {
        text: 'Create Habits',
        collapsed: true,
        items: [
          { text: 'The Importance of Habits', link: '/habits/importance-of-habits' },
          { text: 'Habit Formation Science', link: '/habits/habit-formation-science' },
          { text: 'Good Starting Habits', link: '/markdown-exples' },
          { text: 'Creating New Habits', link: '/habits/creating-new-habits' },
          { text: 'Breaking Bad Habits', link: 'habits/breaking-bad-habits' },
          { text: 'Tracking Habits', link: 'habits/tracking-habts' }
        ]
      },
      {
        text: 'Develop Wisdom',
        collapsed: true,
        items: [
          { text: 'What is Wisdom?', link: 'wisdom/what-is-wisdom' },
          { text: 'Continuous Education', link: '/markwn-examples' },
          { text: 'Socratic Reasoning', link: '/markd-examples' },
          { text: 'Things Will Go Wrong', link: '/api-examps' },
          { text: 'Conquering Desire', link: '/api-examps' },
          { text: 'Keep a Journal', link: '/api-exples' },
          { text: 'Travel', link: 'wisdom/travel' },
          { text: "Don't Lie", link: 'wisdom/dont-lie' },
          { text: 'On Control', link: 'wisdom/on-control' },
          {"text": "Philosophies",
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
          { text: 'Learn to Listen', link: '/markdown-amples' },
          { text: 'Be Charitable', link: '/api-exples' },
          { text: 'How To Make Friends', link: '/relationships/how-to-make-friends' },
          { text: 'Communicate Clearly', link: '/api-exples' }
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
      text: 'Practice Mindfulness',
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
          { "text": "Avoid Materialism", "link": "/wealth/avoid-materialism" },
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
          { text: 'Losing Weight', link: '/health/losing-weight'},
          { text: 'Preventive Healthcare', link: '/api-exames' },
          { text: 'Metabolic Syndrome', link: '/health/non-communicable-diseases'},
          { text: 'Hormones', link: '/health/hormones'},
          { text: 'Inflammation', link: '/health/inflammation'},
          { text: 'Autophagy', link: '/health/autophagy'},
          {
            "text": "Nutrition",
            "collapsed": true,
            "items": [
              { "text": "Fats", "link": "/health/nutrition/fats" },
              { "text": "Carbohydrates", "link": "/health/nutrition/carbs" },
              { "text": "Protein", "link": "/health/nutrition/protein" },
              { "text": "Sugar", "link": "/health/nutrition/sugar" },
              { "text": "Salt", "link": "/health/nutrition/salt" },
              { "text": "Fasting", "link": "/health/nutrition/fasting" },
            ]
          },
          { text: 'Exercise', link: '/markdown-exples' },
          { text: 'Sleep', link: '/health/sleep' },
          { text: 'Addictions', link: '/api-exames' },
          { text: 'Breathing Techniques', link: '/api-exames' },
          { text: 'Mental Health', link: '/api-exales' }
        ]
      },
      {
      text: 'Common Problems',
      collapsed: true,
      items: [
      { text: 'Anxiety', link: '/problems/anxiety' },
      { text: 'Depression', link: '/problems/depression' },
      { text: 'Stress', link: '/problems/stress' },
      { text: 'Procrastination', link: '/problems/procrastination' },
      { text: 'Low Self-Esteem', link: '/problems/low-self-esteem' },
      { text: 'Relationship Issues', link: '/problems/relationship-issues' },
      { text: 'Financial Struggles', link: '/problems/financial-struggles' },
      { text: 'Time Management', link: '/problems/time-management' },
      { text: 'Addiction', link: '/problems/addiction' },
      { text: 'Burnout', link: '/problems/burnout' },
      { text: 'Loneliness', link: '/problems/loneliness' },
      { text: 'Imposter Syndrome', link: '/problems/imposter-syndrome' },
      { text: 'Sleep Disorders', link: '/problems/sleep-disorders' },
      { text: 'Eating Disorders', link: '/problems/eating-disorders' },
      { text: 'Anger Management', link: '/problems/anger-management' },
      { text: 'Grief and Loss', link: '/problems/grief-and-loss' },
      { text: 'Trauma', link: '/problems/trauma' },
      { text: 'Overweight', link: '/problems/overweight' }
      ]
      },
      {
      text: 'Tools',
      collapsed: true,
      items: [
      { text: 'Introduction to Tools', link: '/tools/introduction-to-tools' },
      { text: 'Negative Visualisation', link: '/tools/negative-visualisation' },
      { text: 'Daily Reflection', link: '/tools/daily-reflection' },
      { text: 'Boredom', link: '/tools/boredom' },
      { text: 'Breathwork', link: '/tools/breathwork' },
      { text: 'Focus on a Point', link: '/tools/focus-on-a-point' },
      { text: 'Gratitude', link: '/tools/gratitude' },
      { text: 'Journaling', link: '/tools/journaling' },
      { text: 'Spaced Repetition', link: '/tools/journaling' }, 
      { text: 'Software', link: '/tools/software' }
      ]
      },
      {
      text: 'Editorial Guidelines',
      collapsed: true,
      items: [
      { text: 'Writing Style', link: '/editorial-guidelines/writing-style' },
      { text: 'Illustration Style', link: '/editorial-guidelines/illustration-style' },
      { text: 'Graphs Style', link: '/editorial-guidelines/graphs-style' },
      { text: 'Referencing', link: '/editorial-guidelines/referencing' },
      { text: 'How To Contribute', link: '/editorial-guidelines/how-to-contribute' },
      { text: 'List of Contributors ', link: '/editorial-guidelines/list-of-contributors' },
      ]
      },
      
    ],
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/emanuelefaja/howtolive' }
    ]
  }
})

