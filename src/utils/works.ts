const saberImg = '/images/saber-liquidation.png';
const giftcardxImg = '/images/giftcardx.png';
const dashRdImg = '/images/dash-rd.png';
const meTimeImg = '/images/me-time.png';
const dullesGlassImg = '/images/dulles-glass.png';
const y2DigitalImg = '/images/y2-digital.png';

const gotgImg = '/images/game-of-the-gods.png';
const gotgImg01 = '/images/game-of-the-gods_01.png';
const gotgImg02 = '/images/game-of-the-gods_02.png';

const ranPhImg = '/images/ran-online-ph.png';

const coffeeDojoImg = '/images/coffee-dojo_01.gif';
const coffeeDojoImg01 = '/images/coffee-dojo.png';
const coffeeDojoImg02 = '/images/coffee-dojo_02.png';
const coffeeDojoImg03 = '/images/coffee-dojo_03.png';
const coffeeDojoImg04 = '/images/coffee-dojo_04.png';
const coffeeDojoImg05 = '/images/coffee-dojo_05.png';

const lumiFilmsImg = '/images/lumi-films.png';
const lumiFilmsImg01 = '/images/lumi-films_01.png';

const anagogeImg = '/images/anagoge.png';
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
				title: 'GiftCardX',
				outline: 'A giftcard to crypto MVP under development',
				description: '',
				img: [giftcardxImg],
				status: 'in progress',
				stack: ['React', 'Flask'],
				id: 'giftcardx',
				link: 'https://frontend-repo-lemon.vercel.app/'
			},
			{
				title: 'Saber Liquidation',
				outline: `A giftcard to cash MVP developed with a small team`,
				description: '',
				img: [saberImg],
				status: 'active',
				stack: ['React', 'Flask'],
				id: 'saber-liquidation',
				link: 'https://saberliquidation.com/'
			},
			{
				title: 'Dash RD',
				outline: `A digital development agency where I work as full-stack`,
				description: '',
				img: [dashRdImg],
				status: 'active',
				stack: ['React', 'Flask'],
				id: 'dash-rd',
				link: 'https://dashrd.com/'
			},
			{
				title: 'MeTime',
				outline:
					'Web platform providing virtual mental well-being services. A web project of Dash RD',
				description: '',
				img: [meTimeImg],
				status: 'in progress',
				stack: ['Next.js', 'Node.js', 'Strapi'],
				id: 'me-time',
				link: 'https://staging.metimehealing.com/'
			},
			{
				title: 'Dulles Glass',
				outline:
					'Web store for an advanced retailer and manufacturer for custom-cut glass. A web project of Dash RD',
				description: '',
				img: [dullesGlassImg],
				status: 'in progress',
				stack: ['Next.js', 'Node.js', 'Strapi'],
				id: 'dulles-glass',
				link: 'https://staging.dullesglass.dashdev.tech/'
			},
			{
				title: 'y2 Digital',
				outline: 'Contributed /cases and /fpv page',
				description: '',
				img: [y2DigitalImg],
				status: 'done',
				stack: ['Next.js'],
				id: 'y2-digital',
				link: 'https://y2.digital/fpv'
			}
		]
	},
	{
		title: 'Collabs',
		items: [
			{
				title: 'Game of the Gods',
				outline: 'The first Maya Chess digital game in 3D made for fun',
				description: '',
				img: [gotgImg, gotgImg01, gotgImg02],
				status: 'done',
				stack: ['React', 'Three.js'],
				id: 'game-of-the-gods',
				link: 'https://game-of-the-gods.vercel.app/'
			},
			{
				title: 'RAN Online PH',
				outline: 'Complete revamp of legacy website for an old school MMORPG',
				description: '',
				img: [ranPhImg],
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
				img: [anagogeImg],
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
				title: 'MSB8 - Bluesky Media',
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
