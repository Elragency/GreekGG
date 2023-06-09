import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: getPermalink('/'),
    },

    {
      text: 'PLANNING',
      links: [
        {
          text: 'Meal Plans',
          href: getPermalink('/landing/meal'),
        },
        {
          text: 'Workout Plans',
          href: getPermalink('/landing/workout'),
        },
        {
          text: 'Project Trojan',
          href: getPermalink('/landing/trojan'),
        },
      ],
    },
    {
      text: 'RESSOURCES',
      links: [
        // {
        //   text: 'Features',
        //   href: '#',
        // },
        // {
        //   text: 'Pricing',
        //   href: '#',
        // },
        {
          text: 'About Me',
          href: getPermalink('/landing/about-us'),
        },
        {
          text: 'My Content',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Contact',
        //   href: '#',
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },

    {
      text: 'CONTACT',
      href: '#',
    },

  ],
  actions: [
    { type: 'button', text: 'Download', href: getPermalink('/landing/trojan'), }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm"></span>
    Made by <a class="text-gray-400 hover:underline dark:text-gray-200" href="https://google.com"> ELR AGENCY</a> · All rights reserved.
  `,
};
