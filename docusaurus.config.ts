import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BTS Querétaro Guide',
  tagline: 'Centro de Documentación, Procesos CMMI y Operaciones de Oficina',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://josecarlospa.github.io',
  baseUrl: '/BTSQroGuide/',
  trailingSlash: false,

  organizationName: 'JoseCarlosPa',
  projectName: 'BTSQroGuide',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BTS Querétaro',
      logo: {
        alt: 'BTS Querétaro Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Bienvenida',
        },
        {
          to: '/blog',
          label: 'Noticias & Anuncios',
          position: 'left',
        },
        {
          href: 'https://github.com/JoseCarlosPa/BTSQroGuide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Bienvenida',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad & Comunicación',
          items: [
            {
              label: 'Noticias & Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Código',
          items: [
            {
              label: 'Repositorio GitHub',
              href: 'https://github.com/JoseCarlosPa/BTSQroGuide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BTS Querétaro. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
