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
      '/blog/georgia/tbilisi/': [
        {
          text: 'Tbilisi Blog Posts',
          items: [
            { text: 'Why Tbilisi Should Be Your Next Travel Destiantion', link: '/blog/georgia/tbilisi/why-tbilisi-should-be-your-next-travel-destination' },
            { text: 'Top Things to Do in Tbilisi', link: '/blog/georgia/tbilisi/top-things-to-do-in-tbilisi' },
            { text: 'Tbilisi in 24 Hours', link: '/blog/georgia/tbilisi/tbilisi-in-24-hours' },
            { text: 'Tbilisi Two Day Itinerary', link: '/blog/georgia/tbilisi/tbilisi-two-day-itinerary' },
            { text: 'Tbilisi Three Day Itinerary', link: '/blog/georgia/tbilisi/tbilisi-three-day-itinerary' },
            { text: 'Must Visit Historical Sites in Tbilisi', link: '/blog/georgia/tbilisi/must-visit-historical-sites-in-tbilisi' },
            { text: 'Exploring Tbilisis Vibrant Art and Culture Scene', link: '/blog/georgia/tbilisi/exploring-tbilisis-vibrant-art-and-culture-scene' },
            { text: 'Nightlife in Tbilisi', link: '/blog/georgia/tbilisi/nightlife-in-tbilisi' },
            { text: 'Tbilisi Hidden Gems', link: '/blog/georgia/tbilisi/tbilisi-hidden-gems-off-the-beaten-path' },
            { text: 'Tbilisi Wine Culture', link: '/blog/georgia/tbilisi/tbilisi-wine-culture' },
            { text: 'Tbilisi Traditional Georgian Cuisine', link: '/blog/georgia/tbilisi/tbilisi-traditional-georgian-cuisine' },
            { text: 'The Best Cafes and Restaurants in Tbilisi', link: '/blog/georgia/tbilisi/the-best-cafes-and-restaurants-in-tbilisi' },
            { text: 'Tbilisi on a Budget', link: '/blog/georgia/tbilisi/tbilisi-on-a-budget' },
            { text: 'Everything You Need to Know Before Visiting Tbilisi', link: '/blog/georgia/tbilisi/everything-you-need-to-know-before-visiting-tbilisi' },
            { text: 'Best Time to Visit Tbilisi', link: '/blog/georgia/tbilisi/best-time-to-visit-tbilisi' },
            { text: 'How to Get Around Tbilisi', link: '/blog/georgia/tbilisi/how-to-get-around-tbilisi' },
            { text: 'Best Day Trips from Tbilisi', link: '/blog/georgia/tbilisi/best-day-trips-from-tbilisi' },
          ],
        },
      ],
      '/blog/georgia/': [
        {
          text: 'Georgia Blog Posts',
          items: [
            { text: 'Why Anyone Should Visit Georgia', link: '/blog/georgia/why-anyone-should-visit-georgia' },
            { text: 'One Week in Georgia', link: '/blog/georgia/one-week-in-georgia-itinerary' },
            { text: 'Beyond Tbilisi Georgias Other Cities', link: '/blog/georgia/beyond-tbilisi-georgias-other-cities' },
            { text: 'Best Things to Do for Nature Lovers', link: '/blog/georgia/best-things-to-do-for-nature-lovers' },
            { text: 'Best Multi-Day Hikes in Georgia', link: '/blog/georgia/best-multiple-day-hikes-in-georgia' },
            { text: 'Wonders of Kazbegi', link: '/blog/georgia/wonders-of-kazbegi' },
            { text: 'Exploring Georgias Culinary Traditions', link: '/blog/georgia/exploring-georgias-culinary-traditions' },
            { text: 'Exploring Georgias Wine Heritage', link: '/blog/georgia/exploring-georgias-wine-heritage' },
            { text: 'Best of Kakheti', link: '/blog/georgia/best-of-kakheti' },
            { text: 'Winter Sports in Georgia', link: '/blog/georgia/winter-sports-in-georgia' },
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
