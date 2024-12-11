export default {
	async fetch(request, env, ctx): Promise<Response> {
		const pathname = new URL(request.url).pathname;
		const method = request.method;
		if (pathname === '/api/clickstream' && method === 'POST') {
			const body = (await request.json()) as { data: any };
			try {
				await env.MY_PIPELINE.send([body.data]);
				return new Response('OK', { status: 200 });
			} catch (error) {
				console.error(error);
				return new Response('Internal Server Error', { status: 500 });
			}
		}
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
