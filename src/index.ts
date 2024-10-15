export default {
	async fetch(request, env, ctx): Promise<Response> {
		const pathname = new URL(request.url).pathname;
		const method = request.method;
		if (pathname === '/api/clickstream' && method === 'POST') {
			const body = (await request.json()) as { data: any };
			try {
				const response = await fetch(`https://${env.PIPELINES_ID}.pipelines.cloudflare.com`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify([body.data]),
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return new Response('OK', { status: 200 });
			} catch (error) {
				console.error(error);
				return new Response('Internal Server Error', { status: 500 });
			}
		}
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
