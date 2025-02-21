module.exports = {
  title: 'My Site', // Required: The title of your site
  tagline: 'Dinosaurs are cool', // Required: A short description
  //url: 'https://www.example.com', // Required: The full URL of your site
  url: 'https://docusaurus.io',
  baseUrl: '/', // Required: The base URL (e.g., '/' or '/help/')
  onBrokenLinks: 'throw', // Optional: How to handle broken links
  onBrokenMarkdownLinks: 'warn', // Optional: How to handle broken Markdown links
  favicon: 'img/favicon.ico', // Optional: Path to your favicon
  organizationName: 'your-org', // Optional: GitHub org/user name
  projectName: 'your-repo', // Optional: GitHub repo name
  themeConfig: {
    navbar: {
      title: 'CalcPay', // Title displayed in the navbar
      logo: {
        alt: 'CalcPay Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/', // Link to the docs
          label: 'Docs', // Label for the link
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus', // External link
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark', // Footer style (dark or light)
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CalcPay.`, // Copyright notice
    },
  },
};