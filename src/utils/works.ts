const sweepstakeImg = '/images/sweepstake.png';
const sweepstakeImg01 = '/images/sweepstake_01.png';
const sweepstakeImg02 = '/images/sweepstake_02.png';

const landscapeListImg = '/images/landscape-list.png';
const landscapeListImg01 = '/images/landscape-list_01.png';
const landscapeListImg02 = '/images/landscape-list_02.png';
const landscapeListImg03 = '/images/landscape-list_03.png';
const landscapeListImg04 = '/images/landscape-list_04.png';
const landscapeListImg05 = '/images/landscape-list_05.png';
const landscapeListImg06 = '/images/landscape-list_06.png';

const miyaImg = '/images/miya.png';
const miyaImg01 = '/images/miya_01.png';
const miyaImg02 = '/images/miya_02.png';

const cred3Img = '/images/cred-3.png';
const cred3Img01 = '/images/cred-3_01.png';
const cred3Img02 = '/images/cred-3_02.png';
const cred3Img03 = '/images/cred-3_03.png';
const cred3Img04 = '/images/cred-3_04.png';

const saberImg = '/images/saber-liquidation.png';
const saberImg01 = '/images/saber-liquidation_01.png';
const saberImg02 = '/images/saber-liquidation_02.png';
const saberImg03 = '/images/saber-liquidation_03.png';
const saberImg04 = '/images/saber-liquidation_04.png';
const saberImg05 = '/images/saber-liquidation_05.png';

const giftcardxImg = '/images/giftcardx.png';
const giftcardxImg01 = '/images/giftcardx_01.png';
const giftcardxImg02 = '/images/giftcardx_02.png';

const dashRdImg = '/images/dash-rd.png';

const meTimeImg = '/images/me-time.png';
const meTimeImg01 = '/images/me-time_01.png';
const meTimeImg02 = '/images/me-time_02.png';

const dullesGlassImg = '/images/dulles-glass.png';
const dullesGlassImg01 = '/images/dulles-glass_01.png';
//const dullesGlassImg02 = '/images/dulles-glass_02.png';
const dullesGlassImg03 = '/images/dulles-glass_03.png';

const y2DigitalImg = '/images/y2-digital.png';
const y2DigitalImg01 = '/images/y2-digital_01.png';
const y2DigitalImg02 = '/images/y2-digital_02.png';

const gotgImg = '/images/game-of-the-gods.png';
const gotgImg01 = '/images/game-of-the-gods_01.png';
const gotgImg02 = '/images/game-of-the-gods_02.png';

const defoImg = '/images/defo.png';

const turbolegiImg = 'images/turbolegi.png';

const tiagoImg = '/images/tiago.png';
const tiagoImg01 = '/images/tiago_01.png';
const tiagoImg02 = '/images/tiago_02.png';
const tiagoImg03 = '/images/tiago_03.png';
const tiagoImg04 = '/images/tiago_04.png';
const tiagoImg05 = '/images/tiago_05.png';

const ranPhImg = '/images/ran-online-ph.png';
const ranPhImg01 = '/images/ran-online-ph_01.png';
const ranPhImg02 = '/images/ran-online-ph_02.png';
const ranPhImg03 = '/images/ran-online-ph_03.png';

const coffeeDojoImg = '/images/coffee-dojo_01.gif';
const coffeeDojoImg01 = '/images/coffee-dojo.png';
const coffeeDojoImg02 = '/images/coffee-dojo_02.png';
const coffeeDojoImg03 = '/images/coffee-dojo_03.png';
const coffeeDojoImg04 = '/images/coffee-dojo_04.png';
const coffeeDojoImg05 = '/images/coffee-dojo_05.png';

const lumiFilmsImg = '/images/lumi-films.png';
const lumiFilmsImg01 = '/images/lumi-films_01.png';

const anagogeImg = '/images/anagoge.png';
const anagogeImg01 = '/images/anagoge_01.png';

const msb8BlueskyImg = '/images/msb8-bluesky-media.png';
const ranMobileImg = '/images/ran-mobile-mobile.png';
const ezTetrisImg = '/images/ez-tetris.png';

const botRandomThoughtsImg = '/images/bot-random-thoughts.png';
const botRandomThoughtsImg01 = '/images/bot-random-thoughts_01.png';

const ezSnekImg = '/images/ez-snek.png';

export const routeList = [
	{
		path: '/',
		title: 'About'
	},
	{
		path: '/works',
		title: 'Works'
	}
];

interface WorkItemType {
	title: string;
	outline: string;
	description: string;
	img: string[];
	status: string;
	id: string;
	deets: { title: string; href?: string; description?: string }[];
}

interface WorkType {
	title: string;
	items: WorkItemType[];
}

export const works: WorkType[] = [
	{
		title: 'Works',
		items: [
			{
				id: 'confidential',
				title: 'confidential',
				outline: `An online sweepstakes app, europe/internationally based`,
				description:
					`An online sweepstakes app where I worked as a solo frontend developer. Also oversaw the backend progress and contributed to various aspects of it. The app reached up to 500 active users during its launch in the first week of May 2024 and continue to grow exponentially, remaining active to this day.`,
				img: [
					sweepstakeImg,
					sweepstakeImg01,		
					sweepstakeImg02
				],
				status: 'active',
				deets: [
					{
						title: 'Tech/Tools',
						description:
							'Vue 3, Web Sockets, Node.js, PostgreSQL'
					}
				]
			},
			{
				id: 'dash-rd',
				title: 'Dash RD',
				outline: `A digital development agency where I work as full-stack`,
				description:
					'A digital development agency where I interned for a month and then got hired as full-stack developer. I have the chance to maintain and contribute to cool projects such as the website of MeTime Healing and Dulles Glass with a small but awsome team.',
				img: [
					dashRdImg,
					landscapeListImg,
					meTimeImg,
					dullesGlassImg,
					meTimeImg01,
					landscapeListImg01,
					dullesGlassImg01,
					meTimeImg02,
					landscapeListImg02,
					dullesGlassImg03
				],
				status: 'active',
				deets: [
					{ title: 'Website', href: 'https://dashrd.com/' },
					{
						title: 'Tech/Tools',
						description:
							'Next.js, Node.js, Builder.io, Strapi, Chakra-UI, TailwindCSS, Framer Motion, GraphQL, Firebase'
					},
					{ title: 'Project', href: '/works/landscape-list', description: 'LandscapeList' },
					{ title: 'Project 01', href: 'https://www.metimehealing.com/' },
					{ title: 'Project 02', href: 'https://www.dullesglass.com/' }
				]
			},
			{
				id: 'landscape-list',
				title: 'Landscape List',
				outline: `Spearheaded a Next.js app into production with visual CMS.`,
				description: `Built from scratch into production project I made with Dash RD for Landscape List. UI/UX Design is served by Dash RD's talended Graphic Designer on Figma. Crafted with keen eye not limited to visuals but also full modularity of coded components for swift drag & drop CMS action of Builder.io. Multiple integrated webhooks, custom /api routes, and microservices done by yours truly.`,
				img: [
					landscapeListImg,
					landscapeListImg01,
					landscapeListImg02,
					landscapeListImg03,
					landscapeListImg04,
					landscapeListImg05,
					landscapeListImg06
				],
				status: 'in progress',
				deets: [
					{ title: 'Website', href: 'https://landscape-list.vercel.app' },
					{ title: 'Tech/Tools', description: 'Next.js, Builder.io, TailwindCSS, Framer Motion' },
					{ title: 'Digital Agency', href: '/works/dash-rd', description: 'Dash RD' }
				]
			},
			{
				id: 'game-of-the-gods',
				title: 'Game of the Gods',
				outline: 'The first Maya Chess digital game in 3D made for fun',
				description: `I fancied this new board game the moment I saw it on IG Reels. I've been wanting to code Chess for a long time but it's already the niche for developers and I wanted something new. So here's Game of the Gods, 3D game edition, the first of it's kind. Nearly have been developed into an online game led by me with Maya Chess, but their kickstarter unfortunately turned unfruitful.`,
				img: [gotgImg, gotgImg01, gotgImg02],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://game-of-the-gods.vercel.app/' },
					{ title: 'Tech/Tools', description: 'React, Three.js' },
					{
						title: 'Coverage',
						href: 'https://www.kickstarter.com/projects/mayachess/maya-chess-the-game-of-the-gods/posts/3675279'
					},
					{ title: 'Coverage 01', href: 'https://www.instagram.com/p/Cle0vyoDkhu/' }
				]
			},
			{
				id: 'giftcardx',
				title: 'GiftCardX',
				outline: 'A giftcard to crypto MVP under development',
				description:
					'Ongoing B2C MVP development for a startup providing fast and secured giftcard-to-cryptocurrency conversion services.',
				img: [giftcardxImg, giftcardxImg01, giftcardxImg02],
				status: 'in progress',
				deets: [
					{ title: 'Website', href: 'https://frontend-repo-lemon.vercel.app/' },
					{
						title: 'Tech/Tools',
						description: 'React, React Query, Axios, TailwindCSS, Framer Motion, Storybook, Flask'
					}
				]
			},
			{
				id: 'saber-liquidation',
				title: 'Saber Liquidation',
				outline: `A giftcard to cash MVP developed with a small team. `,
				description: `Developed an MVP web app for a startup providing fast and secured giftcard-to-cash conversion services developed with a small team on restricted schedule as freelancer. Proceeds to become a full-stack developer for the startup and build internal tools.`,
				img: [saberImg, saberImg01, saberImg02, saberImg03, saberImg04, saberImg05],
				status: 'active',
				deets: [
					{ title: 'Website', href: 'https://saberliquidation.com/' },
					{
						title: 'Tech/Tools',
						description:
							'React, React Query, Axios, TailwindCSS, Framer Motion, Storybook, Flask, HTML/CSS/JS'
					}
				]
			}
		]
	},
	{
		title: 'Collabs',
		items: [
			{
				id: 'cred-3',
				title: 'CRED 3',
				outline: 'MVP landing page for a startup based in India',
				description:
					'A very bare (unfinished) MVP for CRED 3, a startup based in India. UI Design is provided and UX for animated objects are improvised.',
				img: [cred3Img, cred3Img01, cred3Img02, cred3Img03, cred3Img04],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://cred-3.vercel.app' },
					{ title: 'Tech/Tools', description: 'React, TailwindCSS, Framer Motion' }
				]
			},
			{
				id: 'y2-digital',
				title: 'y2 Digital',
				outline: 'Crafted /cases and /fpv page for a German digital agency.',
				description:
					'A part-time work to contribute /cases and /fpv page pixel-perfect from a Figma design provided for a Germany based agency providing digital services.',
				img: [y2DigitalImg, y2DigitalImg01, y2DigitalImg02],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://y2.digital/fpv' },
					{ title: 'Tech/Tools', description: 'Next.js, Framer Motion' }
				]
			},
			{
				id: 'miya',
				title: 'Miya',
				outline: 'Discontinued MVP for a finance web app',
				description:
					'Discontinued MVP for a finance web app. UI Design is provided and UX for animated objects are improvised.',
				img: [miyaImg, miyaImg01, miyaImg02],
				status: 'inactive',
				deets: [
					{ title: 'Website', href: 'https://miya.vercel.app' },
					{ title: 'Tech/Tools', description: 'React, TailwindCSS, Framer Motion' }
				]
			},
			{
				id: 'turbolegi',
				title: 'Turbolegi',
				outline: 'A memo generator for a company',
				description: `A stable and small web app for generating company memo deployed on a linux server of DigitalOcean`,
				img: [turbolegiImg],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://turbolegi.com' },
					{ title: 'Tech/Tools', description: 'Flask, Auth0, Open AI, Jinja2, TailwindCSS' }
				]
			},
			{
				id: 'tiago-faleiro',
				title: 'Tiago Faleiro',
				outline: 'A coaching website for an independent psychologist',
				description: '',
				img: [tiagoImg, tiagoImg01, tiagoImg02, tiagoImg03, tiagoImg04, tiagoImg05],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://tiago-faleiro.vercel.app/' },
					{ title: 'Tech/Tools', description: 'React, TailwindCSS, Framer Motion' }
				]
			},
			{
				id: 'defo',
				title: 'Defo',
				outline: 'Value computation from APIs for an NFT',
				description: '',
				img: [defoImg],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://www.defo.app/' },
					{ title: 'Tech/Tools', description: 'Next.js' }
				]
			},
			{
				id: 'ran-online-ph',
				title: 'RAN Online PH',
				outline: 'Complete revamp of legacy website for an old school MMORPG',
				description:
					'Complete revamp of legacy website for an old school MMORPG with integration to existing PHP server',
				img: [ranPhImg, ranPhImg01, ranPhImg02, ranPhImg03],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://ranonlineph-official.com/' },
					{ title: 'Tech/Tools', description: 'React, Chakra UI, Axios' }
				]
			},
			{
				id: 'coffee-dojo',
				title: 'Coffee Dojo',
				outline: 'A visual website for a Japanese cafe',
				description: '',
				img: [
					coffeeDojoImg,
					coffeeDojoImg01,
					coffeeDojoImg02,
					coffeeDojoImg03,
					coffeeDojoImg04,
					coffeeDojoImg05
				],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://coffee-dojo.com' },
					{ title: 'Tech/Tools', description: 'React, Node.js' }
				]
			},
			{
				id: 'lumi-films',
				title: 'Lumi Films Singapore',
				outline: 'Web design in Figma for a Singapore startup film studio',
				description: '',
				img: [lumiFilmsImg, lumiFilmsImg01],
				status: 'inactive',
				deets: [
					{
						title: 'Figma',
						href: 'https://www.figma.com/file/Ltq0iqsrXNknjzLDpUV9Xz/lumifilms.sg-(Copy)?node-id=0%3A1&t=hO9ei6PuXo9V88vd-0'
					},
					{ title: 'Tech/Tools', description: 'Figma, Photoshop' }
				]
			},
			{
				id: 'anagoge',
				title: 'Anagoge',
				outline: 'A philosophy, psychology, and wisdom podcast collection',
				description: '',
				img: [anagogeImg, anagogeImg01],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://anagoge-test.vercel.app/' },
					{ title: 'Tech/Tools', description: 'React, Framer Motion, TailwindCSS' }
				]
			}
		]
	},
	{
		title: 'Olds',
		items: [
			{
				id: 'msb8-bluesky',
				title: 'Bluesky Media',
				outline: '.PSD to HTML conversion.',
				description: '',
				img: [msb8BlueskyImg],
				status: 'inactive',
				deets: [
					{ title: 'Website', href: 'https://msb8-bluesky-media.vercel.app/' },
					{ title: 'Tech/Tools', description: 'React' }
				]
			},
			{
				id: 'ran-mobile-ph',
				title: 'RAN Mobile',
				outline: 'Landing page for a mobile game',
				description: '',
				img: [ranMobileImg],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://ran-mobile.com' },
					{ title: 'Tech/Tools', description: 'React' }
				]
			},
			{
				id: 'ez-tetris',
				title: 'Ez Tetris Online',
				outline: 'An online 1v1 tetris game for fun',
				description: '',
				img: [ezTetrisImg],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://ez-tetris-online.suntoes.repl.co' },
					{ title: 'Tech/Tools', description: 'Vanilla HTML/CSS, JavaScript, Node.js, MongoDB' }
				]
			},
			{
				id: 'ez-snek',
				title: 'Ez Snek Online',
				outline: 'An online 1v1 snake game for fun',
				description: '',
				img: [ezSnekImg],
				status: 'done',
				deets: [
					{ title: 'Website', href: 'https://ez-snek-online.suntoes.repl.co' },
					{ title: 'Tech/Tools', description: 'Vanilla HTML/CSS, JavaScript, Node.js, MongoDB' }
				]
			},
			{
				id: 'bot-random-thoughts',
				title: 'bot/RandomThoughts',
				outline: '24/7 scraper bot that tweets',
				description: '',
				img: [botRandomThoughtsImg, botRandomThoughtsImg01],
				status: 'inactive',
				deets: [
					{ title: 'Website', href: 'https://github.com/suntoes/bot-RandomThoughts' },
					{ title: 'Tech/Tools', description: 'Node.js, MongoDB, Puppeteer' }
				]
			}
		]
	}
];
