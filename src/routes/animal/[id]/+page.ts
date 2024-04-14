import type { PageLoad } from './$types';
import type { LoadEvent } from '@sveltejs/kit';

export const load: PageLoad = async (loadEvent: LoadEvent) => {

	const animal = await loadEvent.fetch("http://localhost:3000/animals/" + loadEvent.params.id)

	return {
		animal: await animal.json(),
	};
};