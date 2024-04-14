import type { PageLoad } from './$types';
import type { LoadEvent } from '@sveltejs/kit';

export const load: PageLoad = async (loadEvent: LoadEvent) => {

	const animals: Response = await loadEvent.fetch("http://localhost:3000/animals")

	return {
		animals: await animals.json(),
	};
};