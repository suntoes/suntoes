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
	stack: string[];
	id: string;
	link: string;
	links?: { title: string; href: string }[];
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
				stack: [
					'Next.js',
					'Node.js',
          'Builder.io',
					'Strapi',
					'Chakra-UI',
          'TailwindCSS',
					'Framer Motion',
					'GraphQL',
					'Firebase'
				],
				id: 'dash-rd',
				link: 'https://dashrd.com/',
				links: [
					{ title: 'Landscape List', href: 'landscape-list.vercel.app/' },
					{ title: 'Me Time', href: 'https://www.metimehealing.com/' },
					{ title: 'Dulles Glass', href: 'https://staging.dullesglass.dashdev.tech/' }
				]
			},
			{
				title: 'Landscape List',
				outline: `Spearheaded a Next.js app with visual CMS for Dash RD.`,
				description: `Spearheaded an ongoing project with Dash RD for Landscape List. UI/UX Design is served by Dash RD's talended Graphic Designer on Figma. Crafted with keen eye not limited to visuals but also modularity of coded components for swift drag & drop CMS action of Builder.io.`,
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
				stack: ['Next.js', 'Builder.io', 'TailwindCSS', 'Framer Motion'],
				id: 'landscape-list',
				link: 'https://landscape-list.vercel.app'
			},
			{
				title: 'GiftCardX',
				outline: 'A giftcard to crypto MVP under development',
				description:
					'Ongoing B2C MVP development for a startup providing fast and secured giftcard-to-cryptocurrency conversion services.',
				img: [giftcardxImg, giftcardxImg01, giftcardxImg02],
				status: 'in progress',
				stack: [
					'React',
					'React Query',
					'Axios',
					'TailwindCSS',
					'Framer Motion',
					'Storybook',
					'Flask'
				],
				id: 'giftcardx',
				link: 'https://frontend-repo-lemon.vercel.app/'
			},
			{
				title: 'CRED 3',
				outline: 'MVP landing page for a startup based in India',
				description:
					'A very bare (unfinished) MVP for CRED 3, a startup based in India. UI Design is provided and UX for animated objects are improvised.',
				img: [cred3Img, cred3Img01, cred3Img02, cred3Img03, cred3Img04],
				status: 'done',
				stack: ['React', 'TailwindCSS', 'Framer Motion'],
				id: 'cred-3',
				link: 'https://cred-3.vercel.app'
			},
			{
				title: 'y2 Digital',
				outline: 'Crafted /cases and /fpv page for a German digital agency.',
				description:
					'A part-time work to contribute /cases and /fpv page pixel-perfect from a Figma design provided for a Germany based agency providing digital services.',
				img: [y2DigitalImg, y2DigitalImg01, y2DigitalImg02],
				status: 'done',
				stack: ['Next.js', 'Framer Motion'],
				id: 'y2-digital',
				link: 'https://y2.digital/fpv'
			},
			{
				title: 'Saber Liquidation',
				outline: `A giftcard to cash MVP developed with a small team. `,
				description: `Developed an MVP web app for a startup providing fast and secured giftcard-to-cash conversion services developed with a small team on restricted schedule as freelancer. Proceeds to become a full-stack developer for the startup and build internal tools.`,
				img: [saberImg, saberImg01, saberImg02, saberImg03, saberImg04, saberImg05],
				status: 'active',
				stack: [
					'React',
					'React Query',
					'Axios',
					'TailwindCSS',
					'Framer Motion',
					'Storybook',
					'Flask',
					'HTML/CSS/JS'
				],
				id: 'saber-liquidation',
				link: 'https://saberliquidation.com/'
			}
		]
	},
	{
		title: 'Collabs',
		items: [
			{
				title: 'Game of the Gods',
				outline: 'The first Maya Chess digital game in 3D made for fun',
				description: `I fancied this new board game the moment I saw it on IG Reels. I've been wanting to code Chess for a long time but it's already the niche for developers and I wanted something new. So here's Game of the Gods, 3D game edition, the first of it's kind.`,
				img: [gotgImg, gotgImg01, gotgImg02],
				status: 'done',
				stack: ['React', 'Three.js'],
				id: 'game-of-the-gods',
				link: 'https://game-of-the-gods.vercel.app/',
				links: [
					{
						title: 'Kickstarter mention',
						href: 'https://www.kickstarter.com/projects/mayachess/maya-chess-the-game-of-the-gods/posts/3675279'
					},
					{ title: 'Instagram mention', href: 'https://www.instagram.com/p/Cle0vyoDkhu/' }
				]
			},
			{
				title: 'Miya',
				outline: 'Discontinued MVP for a finance web app',
				description:
					'Discontinued MVP for a finance web app. UI Design is provided and UX for animated objects are improvised.',
				img: [miyaImg, miyaImg01, miyaImg02],
				status: 'inactive',
				stack: ['React', 'TailwindCSS', 'Framer Motion'],
				id: 'miya',
				link: 'https://miya.vercel.app'
			},
			{
				title: 'Tiago Faleiro',
				outline: 'A coaching website for an independent psychologist',
				description: '',
				img: [tiagoImg, tiagoImg01, tiagoImg02, tiagoImg03, tiagoImg04, tiagoImg05],
				status: 'done',
				stack: ['React', 'TailwindCSS', 'Framer Motion'],
				id: 'tiago-faleiro',
				link: 'https://tiago-faleiro.vercel.app/'
			},
			{
				title: 'RAN Online PH',
				outline: 'Complete revamp of legacy website for an old school MMORPG',
				description:
					'Complete revamp of legacy website for an old school MMORPG with integration to existing PHP server',
				img: [ranPhImg, ranPhImg01, ranPhImg02, ranPhImg03],
				status: 'done',
				stack: ['React'],
				id: 'ran-online-ph',
				link: 'https://ranonlineph-official.com/'
			},
			{
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
				stack: ['React', 'Node.js'],
				id: 'coffee-dojo',
				link: 'https://coffee-dojo.com'
			},
			{
				title: 'Lumi Films Singapore',
				outline: 'Web design in Figma for a Singapore startup film studio',
				description: '',
				img: [lumiFilmsImg, lumiFilmsImg01],
				status: 'inactive',
				stack: ['Figma', 'Photoshop'],
				id: 'lumi-films',
				link: 'https://www.figma.com/file/Ltq0iqsrXNknjzLDpUV9Xz/lumifilms.sg-(Copy)?node-id=0%3A1&t=hO9ei6PuXo9V88vd-0'
			},
			{
				title: 'Anagoge',
				outline: 'A philosophy, psychology, and wisdom podcast collection',
				description: '',
				img: [anagogeImg, anagogeImg01],
				status: 'done',
				stack: ['React'],
				id: 'anagoge',
				link: 'https://anagoge-test.vercel.app/'
			}
		]
	},
	{
		title: 'Olds',
		items: [
			{
				title: 'Bluesky Media',
				outline: '.PSD to HTML conversion.',
				description: '',
				img: [msb8BlueskyImg],
				status: 'inactive',
				stack: ['React'],
				id: 'msb8-bluesky',
				link: 'https://msb8-bluesky-media.vercel.app/'
			},
			{
				title: 'RAN Mobile',
				outline: 'Landing page for a mobile game',
				description: '',
				img: [ranMobileImg],
				status: 'done',
				stack: ['React'],
				id: 'ran-mobile-ph',
				link: 'https://ran-mobile.com'
			},
			{
				title: 'Ez Tetris Online',
				outline: 'An online 1v1 tetris game for fun',
				description: '',
				img: [ezTetrisImg],
				status: 'done',
				stack: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
				id: 'ez-tetris',
				link: 'https://ez-tetris-online.suntoes.repl.co'
			},
			{
				title: 'Ez Snek Online',
				outline: 'An online 1v1 snake game for fun',
				description: '',
				img: [ezSnekImg],
				status: 'done',
				stack: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
				id: 'ez-snek',
				link: 'https://ez-snek-online.suntoes.repl.co'
			},
			{
				title: 'bot/RandomThoughts',
				outline: '24/7 scraper bot that tweets',
				description: '',
				img: [botRandomThoughtsImg, botRandomThoughtsImg01],
				status: 'inactive',
				stack: ['Node.js', 'MongoDB'],
				id: 'bot-random-thoughts',
				link: 'https://github.com/suntoes/bot-RandomThoughts'
			}
		]
	}
];
