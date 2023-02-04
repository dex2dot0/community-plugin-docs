// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Community Plugin',
	tagline:
		'A community built and maintained plugin focused on rapidly creating innovative solutions for Encompass ©',
	url: 'https://community-plugin.com/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'favicons/favicon.ico',
	organizationName: 'dex2dot0', // Usually your GitHub org/user name.
	projectName: 'community-plugin-docs', // Usually your repo name.
	trailingSlash: false,
	plugins: [
        [
			"posthog-docusaurus",
			{
				apiKey: "phc_JEuwmujkBcwgZsbE5oVZXPnscC3ObiV7P09Pr5q2KYH",
				enableInDevelopment: false, // optional
				autocapture: false,
				capture_pageview: true, // default but shown here for clarity
				disable_session_recording: true,
			}
		],
    ],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/zacksharkey/CommunityPlugin/website',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Home',
				logo: {
					alt: 'Community Plugin Logo',
					src: 'logos/logo 3600x3600 green.svg',
				},
				items: [
					{
						to: 'docs/documentation/intro',
						position: 'left',
						label: 'Docs',
						activeBasePath: 'docs/documentation',
					},
					{
						to: 'docs/development/intro',
						position: 'left',
						label: 'Development',
						activeBasePath: 'docs/development',
					},
					{
						href: 'https://github.com/zacksharkey/CommunityPlugin',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Docs',
								to: '/docs/documentation/intro',
							},
						],
					},
					{
						title: 'Development',
						items: [
							{
								label: 'Development',
								to: '/docs/development/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Basecamp',
								href: 'https://3.basecamp.com/4747351/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Zachary Sharkey<br>
        Encompass® is a trademark of the entities of ICE Mortgage Technology.`,
				logo: {
					alt: 'Community Plugin Logo',
					src: 'logos/Community Plugin-logos/transparent.svg',
					width: 60,
					height: 60,
				},
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: '1PUV46FNUI',
		  
				// Public API key: it is safe to commit it
				apiKey: '880ba90f585ac49a55387fb25aeedf55',
		  
				indexName: 'community-plugin',
		  
				// Optional: see doc section below
				//contextualSearch: true,
		  
				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				//externalUrlRegex: 'external\\.com|domain\\.com',
		  
				// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
				// replaceSearchResultPathname: {
				//   from: '/docs/', // or as RegExp: /\/docs\//
				//   to: '/',
				// },
		  
				// Optional: Algolia search parameters
				//searchParameters: {},
		  
				// Optional: path for search page that enabled by default (`false` to disable it)
				//searchPagePath: 'search',
		  
				//... other Algolia params
			  }
		}),
};

module.exports = config;
