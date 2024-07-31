import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: 'Birds of a Feather',
  description: 'Everything you need to know about traveling to the Republic of Georgia.',

  sitemap: {
    hostname: 'https://birdsofafeather.eu',
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 'deep',
    },

    nav: [
      { text: 'Our Travel Services', link: '/our-travel-services' },
      { text: 'Blog', link: '/blog' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: {
      '/our-travel-services/': [
        {
          text: 'Our Travel Services',
          items: [
            { text: 'Custom Georgia Adventures', link: '/our-travel-services/custom-georgia-adventures' },
            { text: 'Group Trips', link: '/our-travel-services/group-trips' },
            { text: 'Our 5 Step Process', link: '/our-travel-services/our-5-step-process' },
            { text: 'Custom Packages & Pricing', link: '/our-travel-services/packages-pricing' },
          ],
        },
      ],
    },
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  ],

  footer: {
    message: 'Copyright © 2024-present Esther van Kalken',
    copyright: 'All rights reserved',
  },
})
