
# E-commerce Clickstream Example

This project implements a Cloudflare Worker that handles clickstream data for an e-commerce application. It sends clickstream events via an API endpoint and forwards them to a Cloudflare Pipelines that ingests it to an R2 bucket.

## Features

- Receives clickstream data through a POST request to `/api/clickstream`
- Forwards the data to a Cloudflare Pipelines
- Handles errors and provides appropriate responses

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Create a new Pipeline
- You need the `Access Key ID` and the `Secret Access Key` of your R2 bucket. Follow the [R2 documentation](/r2/api/s3/tokens/) to get these keys.
- Create a new Pipeline with the following command:
```sh
npx wrangler pipelines create <PIPELINE_NAME> --r2 <BUCKET_NAME> --access-key-id <ACCESS_KEY_ID> --secret-access-key <SECRET_ACCESS_KEY>
```
- Replace the placeholders with your actual values.

4. Rename `.dev.vars.example` to `.dev.vars` and update the `PIPELINES_ID` with your actual value.

## Usage

Start the development server:
```bash
npm run dev
```

## Deployment

To deploy the worker, run:
```bash
npm run deploy
```

Next, add the `PIPELINES_ID` secret:
```bash
npx wrangler secret put PIPELINES_ID
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Check out the [LICENSE](LICENSE) file for details.