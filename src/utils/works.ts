const saberImg = 'images/saber-liquidation.png';
const giftcardxImg = 'images/giftcardx.png';
const dashRdImg = 'images/dash-rd.png';
const meTimeImg = 'images/me-time.png';
const dullesGlassImg = 'images/dulles-glass.png';
const y2DigitalImg = 'images/y2-digital.png';
const gotgImg = 'images/game-of-the-gods.png';
const ranPhImg = 'images/ran-online-ph.png';
const coffeeDojoImg = 'images/coffee-dojo_01.gif';
const lumiFilmsImg = 'images/lumi-films.png';
const msb8BlueskyImg = 'images/msb8-bluesky-media.png';
const ranMobileImg = 'images/ran-mobile-mobile.png';
const ezTetrisImg = 'images/ez-tetris.png';
const botRandomThoughtsImg = 'images/bot-random-thoughts.png';
const ezSnekImg =
	'https://raw.githubusercontent.com/suntoes/ez-snek-game/master/resources/gameplay.png';

export const works = [
	{
		title: 'Works',
		items: [
			{
				title: 'GiftCardX',
				description: 'A crypto/fintech MVP app',
				img: giftcardxImg,
				status: 'in progress',
				pathname: 'https://frontend-repo-lemon.vercel.app/'
				//pathname: '/works/giftcardx'
			},
			{
				title: 'Saber Liquidation',
				description: 'Startup fintech web app',
				img: saberImg,
				status: 'active',
				pathname: 'https://saberliquidation.com/'
				//pathname: '/works/saber-liquidation'
			},
			{
				title: 'Dash RD',
				description: 'A digital development agency ',
				img: dashRdImg,
				status: 'active',
				pathname: 'https://dashrd.com/'
				//pathname: '/works/dash-rd'
			},
			{
				title: 'MeTime',
				description: 'Contributor via DashRD',
				img: meTimeImg,
				status: 'in progress',
				pathname: 'https://staging.metimehealing.com/'
				//pathname: '/works/me-time'
			},
			{
				title: 'Dulles Glass',
				description: 'Contributor via DashRD',
				img: dullesGlassImg,
				status: 'in progress',
				pathname: 'https://staging.dullesglass.dashdev.tech/'
				//pathname: '/works/dulles-glass'
			},
			{
				title: 'y2 Digital',
				description: 'Contributed /cases and /fpv',
				img: y2DigitalImg,
				status: 'done',
				pathname: 'https://y2.digital/fpv'
				//pathname: '/works/y2-digital'
			}
		]
	},
	{
		title: 'Collabs',
		items: [
			{
				title: 'Game of the Gods',
				description: 'The first Maya Chess 3D game',
				img: gotgImg,
				status: 'done',
				pathname: 'https://game-of-the-gods.vercel.app/'
				//pathname: '/works/game-of-the-gods'
			},
			{
				title: 'RAN Online PH',
				description: 'Complete revamp of legacy',
				img: ranPhImg,
				status: 'done',
				pathname: 'https://ranonlineph-official.com/'
				//pathname: '/works/ran-online-ph'
			},
			{
				title: 'Coffee Dojo',
				description: 'A visual website for a cafe',
				img: coffeeDojoImg,
				status: 'done',
				pathname: 'https://coffee-dojo.com'
				//pathname: '/works/coffee-dojo'
			},
			{
				title: 'Lumi Films Singapore',
				description: 'Web design for a film studio',
				img: lumiFilmsImg,
				status: 'inactive',
				pathname:
					'https://www.figma.com/file/Ltq0iqsrXNknjzLDpUV9Xz/lumifilms.sg-(Copy)?node-id=0%3A1&t=hO9ei6PuXo9V88vd-0'
				//pathname: '/works/lumi-films'
			}
		]
	},
	{
		title: 'Olds',
		items: [
			{
				title: 'MSB8 - Bluesky Media',
				description: '.PSD to HTML conversion.',
				img: msb8BlueskyImg,
				status: 'inactive',
				pathname: 'https://msb8-bluesky-media.vercel.app/'
				//pathname: '/works/msb8-bluesky'
			},
			{
				title: 'RAN Mobile',
				description: 'Brand identity for a startpu',
				img: ranMobileImg,
				status: 'done',
				pathname: 'https://ran-mobile.com'
				//pathname: '/works/ran-mobile-ph'
			},
			{
				title: 'Ez Tetris Online',
				description: 'An online 1v1 tetris game',
				img: ezTetrisImg,
				status: 'done',
				pathname: 'https://ez-tetris-online.suntoes.repl.co'
				//pathname: '/works/ez-tetris'
			},
			{
				title: 'Ez Snek Online',
				description: 'An online 1v1 snake game',
				img: ezSnekImg,
				status: 'done',
				pathname: 'https://ez-snek-online.suntoes.repl.co'
				//pathname: '/works/ez-snek'
			},
			{
				title: 'bot/RandomThoughts',
				description: '24/7 scraper bot that tweets',
				img: botRandomThoughtsImg,
				status: 'inactive',
				pathname: 'https://github.com/suntoes/bot-RandomThoughts'
				//pathname: '/works/bot-random-thoughts'
			}
		]
	}
];

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
