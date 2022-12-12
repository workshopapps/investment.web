import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
	  dsn: SENTRY_DSN || "https://7df4ea9fa41e471e8d2141fc5e7b0bd2@o4504281377996800.ingest.sentry.io/4504306276499456",
	  // We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 0.3,
	// ...
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
	});
