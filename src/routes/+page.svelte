<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;


</script>

{@debug data}


<div class="flex flex-col w-[80%] m-auto mt-6">
	<div class="-m-1.5 overflow-x-auto">
		<div class="p-1.5 min-w-full inline-block align-middle">
			<div class="overflow-hidden">
				<table class="min-w-full divide-y divide-gray-200">
					<thead>
					<tr>
						<th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
						<th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
						<th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Type</th>
						<th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Diet</th>
						<th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
					</tr>
					</thead>

					<tbody>
					{#each data.animals as animal}
						<tr class="odd:bg-white even:bg-gray-100">
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{animal.id}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold"><a
								href="{'/animal/' + animal.id}">{animal.name}</a></td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{animal.type}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{animal.diet}</td>

							<td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
								<form method="POST" action="?/delete">
									<input type="hidden" name="id" value={animal.id} />
									<button type="submit"
													class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
										Delete
									</button>
								</form>
							</td>
						</tr>
					{/each}

					</tbody>
				</table>

			</div>

			<form method="POST" action="?/create">
				<input type="text" name="name" />
				<input type="text" name="type" />
				<input type="text" name="diet" />
				<button type="submit"
								class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
					Add
				</button>
			</form>
		</div>
	</div>
</div>