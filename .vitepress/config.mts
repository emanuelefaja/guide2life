import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import footnote from 'markdown-it-footnote';
import video from 'markdown-it-video';
import { DefaultTheme, defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: 'src',
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(footnote);
      md.use(video, {
        youtube: { width: 640, height: 390 },
      });
      md.use(InlineLinkPreviewElementTransform);
    },
  },
  cleanUrls: true,
  sitemap: {
    hostname: 'https://guide2life.org',
  },
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  transformPageData(pageData) {
    const canonicalUrl = `https://guide2life.org/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '');

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl },
    ]);
  },
  title: 'Guide2Life',
  description:
    'A structured evidence-based approach to get the most out of life.',
  themeConfig: {
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      } as any,
    },
    externalLinkIcon: true, // Enable external link icons
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Made with ❤️ from around the 🌍',
      copyright: 'No Rights Reserved',
    },
    nav: [{ text: 'Guide', link: '/start/introduction' }],

    sidebar: [
      {
        text: '🌱 Start Here',
        collapsed: false,
        items: [
          { text: '👋 Introduction', link: '/start/introduction' },
          { text: '📖 How To Use This', link: '/start/how-to-use-this' },
          {
            text: '📘 A Philosophy Of Life',
            link: '/start/philosophy-of-life',
          },
          { text: '🧠 Brain Meets World', link: '/start/brain-meets-world' },
          { text: '🔍 Life Audit', link: '/start/life-audit' },
          { text: '☝️ Simple, Not Easy', link: '/start/simple-not-easy' },
          { text: '🎲 Playing The Odds', link: '/start/playing-the-odds' },
          { text: '📈 Growth Mindset', link: 'start/growth-mindset' },
          { text: '📚 Recommended Books', link: '/start/books' },
          { text: '🗞️ Recommended Blogs', link: '/start/blogs' },
          { text: '📺 Recommended Videos', link: '/start/videos' },
          { text: '❓ FAQ', link: '/start/faq' },
        ],
      },
      {
        text: '🛠️ Create Habits',
        collapsed: true,
        items: [
          {
            text: '🌟 The Importance of Habits',
            link: '/habits/importance-of-habits',
          },
          {
            text: '🔬 Habit Formation Science',
            link: '/habits/habit-formation-science',
          },
          { text: '🚀 Good Starting Habits', link: '/markdown-exples' },
          { text: '🗝️ Keystone Habits', link: '/habits/keystone-habits' },
          { text: '🧱 Habit Stacking', link: '/habits/habit-stacking' },
          {
            text: '🛠️ Creating New Habits',
            link: '/habits/creating-new-habits',
          },
          {
            text: '🧹 Breaking Bad Habits',
            link: 'habits/breaking-bad-habits',
          },
          { text: '📊 Tracking Habits', link: 'habits/tracking-habits' },
        ],
      },
      {
        text: '🧠 Develop Wisdom',
        collapsed: true,
        items: [
          { text: '🤔 What is Wisdom?', link: 'wisdom/what-is-wisdom' },
          {
            text: '🧠 How The Brain Works',
            link: '/wisdom/how-the-brain-works',
          },
          { text: '📚 Continuous Education', link: '/markwn-examples' },
          { text: '📢 Socratic Reasoning', link: '/markd-examples' },
          { text: '🚧 Things Will Go Wrong', link: '/api-examps' },
          { text: '🪞 Cultivating Self-Awareness', link: '/api-examps' },
          { text: '🤔 Emotional Intelligence', link: '/api-examps' },
          { text: '❤️ Conquering Desire', link: '/wisdom/desire' },
          {
            text: '❤️ Managing Dissatisfaction',
            link: '/wisdom/disatisfaction',
          },
          { text: '✍️ Keep a Journal', link: '/api-exples' },
          {
            text: '✍️ Instincts vs Reason',
            link: 'wisdom/instincts-vs-reason',
          },
          { text: '✈️ Travel', link: 'wisdom/travel' },
          { text: "🚫 Don't Lie", link: 'wisdom/dont-lie' },
          { text: '🎮 On Control', link: 'wisdom/on-control' },
          {
            text: '📚 Philosophies',
            collapsed: true,
            items: [
              { text: '🏛 Stoicism', link: '/stoicism' },
              { text: '🌿 Epicureanism', link: '/epicureanism' },
              { text: '🤔 Existentialism', link: '/existentialism' },
              { text: '⚖️ Utilitarianism', link: '/utilitarianism' },
              { text: '📘 Confucianism', link: '/confucianism' },
              { text: '🧘‍♂️ Buddhism', link: '/buddhism' },
              { text: '🏺 Platonism', link: '/platonism' },
              { text: '🕳 Nihilism', link: '/nihilism' },
            ],
          },
        ],
      },
      {
        text: '🌿 Optimize Health',
        collapsed: true,
        items: [
          { text: '🍏 What is health?', link: 'health/what-is-health' },
          {
            text: '🔑 Key Concepts',
            collapsed: true,
            items: [
              {
                text: '🧬 Non-Communicable Diseases',
                link: '/health/non-communicable-diseases',
              },
              { text: '🏥 Preventive Healthcare', link: '/api-exames' },
              ,
              {
                text: '🍏 Metabolic Syndrome',
                link: '/health/metabolic-syndrome',
              },
              { text: '🔥 Inflammation', link: '/health/inflammation' },
              { text: '🧘‍♂️ Autophagy', link: '/health/autophagy' },
              { text: '⚖️ BMI', link: '/health/bmi' },
              { text: '🏃‍♂️ NEAT', link: '/health/neat' },
            ],
          },
          { text: '⚖️ Losing Weight', link: '/health/losing-weight' },
          {
            text: '🧬 Biochemicals',
            collapsed: true,
            items: [
              {
                text: '💡 Overview',
                link: '/health/biochemicals/overview',
              },
              {
                text: '🧠 Neurotransmitters',
                collapsed: false,
                items: [
                  {
                    text: '🔹 Dopamine',
                    link: '/health/biochemicals/neurotransmitters/dopamine',
                  },
                  {
                    text: '🔸 Serotonin',
                    link: '/health/biochemicals/neurotransmitters/serotonin',
                  },
                  {
                    text: '🚀 Adrenaline',
                    link: '/health/biochemicals/neurotransmitters/adrenaline',
                  },
                  {
                    text: '🧘 GABA',
                    link: '/health/biochemicals/neurotransmitters/gaba',
                  },
                  {
                    text: '🎉 Endorphins',
                    link: '/health/biochemicals/neurotransmitters/endorphins',
                  },
                  {
                    text: '⚡ Norepinephrine',
                    link: '/health/biochemicals/neurotransmitters/norepinephrine',
                  },
                ],
              },
              {
                text: '🌱 Hormones',
                collapsed: false,
                items: [
                  {
                    text: '💉 Insulin',
                    link: '/health/biochemicals/hormones/insulin',
                  },
                  {
                    text: '🛡️ Thyroid Hormones',
                    link: '/health/biochemicals/hormones/thyroid',
                  },
                  {
                    text: '💑 Estrogen and Testosterone',
                    link: '/health/biochemicals/hormones/sex-hormones',
                  },
                  {
                    text: '🕒 Cortisol',
                    link: '/health/biochemicals/hormones/cortisol',
                  },
                  {
                    text: '💖 Oxytocin',
                    link: '/health/biochemicals/hormones/oxytocin',
                  },
                  {
                    text: '📈 Growth Hormone',
                    link: '/health/biochemicals/hormones/growth-hormone',
                  },
                  {
                    text: '🍴 Ghrelin',
                    link: '/health/biochemicals/hormones/ghrelin',
                  },
                  {
                    text: '🥗 Leptin',
                    link: '/health/biochemicals/hormones/leptin',
                  },
                  {
                    text: '🌜 Melatonin',
                    link: '/health/biochemicals/hormones/melatonin',
                  },
                  {
                    text: '🥄 Glucagon',
                    link: '/health/biochemicals/hormones/glucagon',
                  },
                ],
              },
            ],
          },
          {
            text: '🥗 Nutrition',
            collapsed: true,
            items: [
              { text: '🍖 Fats', link: '/health/nutrition/fats' },
              {
                text: '🍞 Carbohydrates',
                link: '/health/nutrition/carbohydrates',
              },
              { text: '🍳 Protein', link: '/health/nutrition/protein' },
              { text: '🍬 Sugar', link: '/health/nutrition/sugar' },
              { text: '🧂 Salt', link: '/health/nutrition/salt' },
              { text: '☕️ Coffee', link: '/health/nutrition/coffee' },
              { text: '🫖 Tea', link: '/health/nutrition/tea' },
              { text: '🥃 Alcohol', link: '/health/nutrition/alcohol' },
              { text: '🕔 Fasting', link: '/health/nutrition/fasting' },
              { text: '🥦 Vegetables', link: '/health/nutrition/vegetables' },
              {
                text: '🍇 Antioxidants',
                link: '/health/nutrition/antioxidants',
              },
              { text: '🥛 Dairy', link: '/health/nutrition/dairy' },
              { text: '💧 Hydration', link: '/health/nutrition/hydration' },
              {
                text: '🌾 Whole Grains',
                link: '/health/nutrition/whole-grains',
              },
              {
                text: '💊 Supplements & Vitamins',
                link: '/health/nutrition/supplements-vitamins',
              },
              {
                text: '🍽 Meal Planning',
                link: '/health/nutrition/meal-planning',
              },
            ],
          },
          { text: '🏋️‍♂️ Exercise', link: '/markdown-exples' },
          { text: '💤 Sleep', link: '/health/sleep' },
          { text: '🍷 Addictions', link: '/api-exames' },
          {
            text: '🧘 Stress Management Techniques',
            link: '/health/stress-management',
          },
          {
            text: '🌍 Environmental Factors Affecting Health',
            link: '/health/environmental-factors',
          },
          { text: '🌬️ Breathing Techniques', link: '/api-exames' },
          { text: '🧠 Mental Health', link: '/api-exales' },
        ],
      },
      {
        text: '🧮 Decide Rationally',
        collapsed: true,
        items: [
          { text: '🔢 The Types of Decisions', link: '/markdown-amples' },
          { text: '⚙️ Decision Making Processes', link: '/api-exples' },
          { text: '🔍 Reviewing Past Decisions', link: '/api-exples' },
          { text: '🗞️ The Washington Post Test', link: '/api-exples' },
          { text: '🚔 Criminality', link: '/api-exples' },
        ],
      },
      {
        text: '🤝 Cultivate Relationships',
        collapsed: true,
        items: [
          { text: '👂 Learn to Listen', link: '/relationships/listening' },
          {
            text: '🗣️ Difficult Conversations',
            link: 'relationships/difficult-conversations',
          },
          { text: '🎁 Be Charitable', link: 'relationships/be-charitable' },
          {
            text: '👥 How To Make Friends',
            link: '/relationships/how-to-make-friends',
          },
          {
            text: '💬 Communicate Clearly',
            link: 'relationships/communicate-clearly',
          },
        ],
      },
      {
        text: '💼 Work Effectively',
        collapsed: true,
        items: [
          { text: '📊 Managing Workload', link: '/work/managing-workload' },
          {
            text: '👩🏽‍💻 Career Development',
            collapsed: true,
            items: [
              {
                text: '🔍 Job Search Strategies',
                link: '/work/job-search-strategies',
              },
              { text: '📝 Resume/CV Writing', link: '/work/resume-cv-writing' },
              { text: '🤝 Networking Techniques', link: '/work/networking' },
              {
                text: '🔄 Career Transitions',
                link: '/work/career-transitions',
              },
              { text: '🛠️ Career Planning', link: '/work/career-planning' },
            ],
          },
          { text: '📈 Skill Development', link: '/work/skill-development' },
          { text: '🔗 Mono Task', link: '/markdown-amples' },
          { text: '🤖 Use Artificial Intelligence', link: 'work/ai' },
          { text: '⌨️ Touch Typing', link: '/work/touch-typing' },
          { text: '⏳ Manage Time', link: '/time/manage-time' },
          { text: '🍅 Pomodoro Technique', link: '/time/pomodoro' },
          { text: '🌍 Remote Work', link: '/work/remote-work' },
        ],
      },
      {
        text: '🧘 Practice Mindfulness',
        collapsed: true,
        items: [
          { text: '🧘 Meditation', link: '/mindfulness/meditation' },
          { text: '📚 Work Deeply', link: '/mindfulness/deep-work' },
          {
            text: '🧠 Your Attention is Your Life',
            link: 'mindfulness/attention',
          },
          { text: '🧠 Neuroplasticity', link: 'mindfulness/neuroplasticity' },
          { text: '🤸 Yoga', link: 'mindfulness/yoga' },
          { text: '🎶 Music', link: 'mindfulness/music' },
          { text: '🧭 Free Will', link: 'mindfulness/free-will' },
        ],
      },
      {
        text: '💵 Build Wealth',
        collapsed: true,
        items: [
          { text: '💼 What is Wealth?', link: '/wealth/what-is-wealth' },
          { text: '🛍 Avoid Materialism', link: '/wealth/avoid-materialism' },
          { text: '📚 Financial Literacy', link: '/wealth/financial-literacy' },
          { text: '🔄 Compound Interest', link: '/wealth/compound-interest' },
          { text: '💳 Managing Debt', link: '/wealth/managing-debt' },
          { text: '📈 Investing Basics', link: '/wealth/investing-basics' },
          {
            text: '🏠 Real Estate Investing',
            link: '/wealth/real-estate-investing',
          },
          {
            text: '💰 Retirement Planning',
            link: '/wealth/retirement-planning',
          },
          { text: '📉 Risk Management', link: '/wealth/risk-management' },
          {
            text: '🏦 Banking and Savings',
            link: '/wealth/banking-and-savings',
          },
          {
            text: '🌍 Diversification Strategies',
            link: '/wealth/diversification-strategies',
          },
          {
            text: '💹 Stock Market Fundamentals',
            link: '/wealth/stock-market-fundamentals',
          },
          { text: '💸 Tax Planning', link: '/wealth/tax-planning' },
          {
            text: '🧠 The Psychology of Money',
            link: '/wealth/psychology-of-money',
          },
          {
            text: '📊 Budgeting and Expense Tracking',
            link: '/wealth/budgeting-and-expense-tracking',
          },
          {
            text: '🚨 The Importance of Emergency Funds',
            link: '/wealth/emergency-funds',
          },
        ],
      },
      {
        text: '📛 Common Problems',
        collapsed: true,
        items: [
          { text: '🚬 Addiction', link: '/problems/addiction' },
          { text: '😡 Anger Management', link: '/problems/anger-management' },
          { text: '😰 Anxiety', link: '/problems/anxiety' },
          { text: '🔥 Burnout', link: '/problems/burnout' },
          { text: '😔 Depression', link: '/problems/depression' },
          { text: '🍽 Eating Disorders', link: '/problems/eating-disorders' },
          {
            text: '💸 Financial Struggles',
            link: '/problems/financial-struggles',
          },
          { text: '😢 Grief and Loss', link: '/problems/grief-and-loss' },
          { text: '🐶 Losing a Pet', link: '/problems/losing-a-pet' },
          { text: '🤯 Imposter Syndrome', link: '/problems/imposter-syndrome' },
          { text: '🚶 Loneliness', link: '/problems/loneliness' },
          { text: '🔽 Low Self-Esteem', link: '/problems/low-self-esteem' },
          { text: '🏋️ Overweight', link: '/problems/overweight' },
          {
            text: '🔞 Pornography Addiction',
            link: '/problems/pornography-addiction',
          },
          { text: '🕗 Procrastination', link: '/problems/procrastination' },
          {
            text: '💔 Relationship Issues',
            link: '/problems/relationship-issues',
          },
          { text: '😴 Sleep Disorders', link: '/problems/sleep-disorders' },
          { text: '😫 Stress', link: '/problems/stress' },
          { text: '⏳ Time Management', link: '/problems/time-management' },
          { text: '🤕 Trauma', link: '/problems/trauma' },
        ],
      },
      {
        text: '🔧 Reliable Tools',
        collapsed: true,
        items: [
          {
            text: '🛠️ Introduction to Tools',
            link: '/tools/introduction-to-tools',
          },
          {
            text: '🖼 Negative Visualisation',
            link: '/tools/negative-visualisation',
          },
          { text: '📆 Daily Reflection', link: '/tools/daily-reflection' },
          { text: '😶 Boredom', link: '/tools/boredom' },
          { text: '🌬️ Breathwork', link: '/tools/breathwork' },
          { text: '👁️ Focus on a Point', link: '/tools/focus-on-a-point' },
          { text: '🙏 Gratitude', link: '/tools/gratitude' },
          { text: '📖 Journaling', link: '/tools/journaling' },
          { text: '🔁 Spaced Repetition', link: '/tools/journaling' },
          { text: '🖥️ Software', link: '/tools/software' },
        ],
      },
      {
        text: '📜 Editorial Guidelines',
        collapsed: true,
        items: [
          {
            text: '✍️ Writing Style',
            link: '/editorial-guidelines/writing-style',
          },
          { text: '🔗 Referencing', link: '/editorial-guidelines/referencing' },
          {
            text: '🖼️ Illustration Style',
            link: '/editorial-guidelines/illustration-style',
          },
          {
            text: '📊 Graphs Style',
            link: '/editorial-guidelines/graphs-style',
          },
          {
            text: '🤝 How To Contribute',
            link: '/editorial-guidelines/how-to-contribute',
          },
          {
            text: '📃 List of Contributors ',
            link: '/editorial-guidelines/list-of-contributors',
          },
        ],
      },
    ] as DefaultTheme.Sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/emanuelefaja/guide2life' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>',
        },
        link: 'mailto:editor@guide2life.org',
        ariaLabel: 'Email',
      },
    ],
  },
  vite: {
    optimizeDeps: {
      include: [
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client'],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-inline-link-preview',
        '@nolebase/ui'
      ],
    },
  },
});
