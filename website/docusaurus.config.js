// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Community Plugin',
	tagline:
		'A community built and maintained plugin focused on rapidly creating innovative solutions for Encompass ©',
	url: 'https://community-plugin',
	baseUrl: '/community-plugin-docs/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'favicons/favicon.ico',
	organizationName: 'dex2dot0', // Usually your GitHub org/user name.
	projectName: 'community-plugin-docs', // Usually your repo name.
	trailingSlash: false,
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
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
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
		}),
};

module.exports = config;
