import { error } from '@sveltejs/kit';
import { works } from 'src/utils/works';

export function load({ params }) {
	const flatMapWorks = works.map(({ items }) => items).flat();
	const work = flatMapWorks.filter(({ id }) => id === params?.slug)[0];
	console.log('gago', work);

	if (!!work) {
		return {
			work
		};
	}

	throw error(404, 'Not found');
}
