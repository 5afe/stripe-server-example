# Stripe Server Example

The Stripe Server Example repository serves as the starting point for the backend service mentioned in the [Stripe tutorial](https://docs.safe.global/sdk/onramp/stripe) from the Safe documentation.

## Installation

```bash
pnpm install
```

## Set up the environment variables

Copy the `.env.example` file and rename it `.env`, adding the corresponding values to the environment variables. Get the secret key from the [Stripe dashboard](https://dashboard.stripe.com/test/apikeys).

```
FRONTEND_ORIGIN=http://localhost:3000,http://127.0.0.1:5173
SERVER_PORT=3001
STRIPE_SERVER_SECRET_KEY=
```

## Build

```bash
pnpm build
```

## Run the server

To run the server locally, execute the following command:

```bash
pnpm start
```

To run the server in production, once the build is completed, execute the following command:

```bash
pnpm start:prod
```

## License

This library is released under [MIT](https://github.com/5afe/stripe-server-example/tree/main/LICENSE).
