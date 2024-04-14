import type { Actions, RequestEvent } from './$types';

export const actions = {
	create: async (requestEvent: RequestEvent) => {
		const data = await requestEvent.request.formData();
		const name = data.get('name');
		const type = data.get('type');
		const diet = data.get('diet');

		const response = await requestEvent.fetch('http://localhost:3000/animals', {
			method: 'POST',
			body: JSON.stringify({ name, type, diet })
		})
	},

	update: async (requestEvent: RequestEvent) => {

	},
	delete:
		async (requestEvent: RequestEvent) => {
			const data = await requestEvent.request.formData();
			const id = data.get('id');
			await requestEvent.fetch('http://localhost:3000/animals/' + id, { method: 'DELETE' });
		}
} satisfies Actions;