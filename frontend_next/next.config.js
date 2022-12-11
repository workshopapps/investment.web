/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}
const { withSentryConfig } = require("@sentry/nextjs");
module.exports = nextConfig
const moduleExports = {
	  sentry: {
		      widenClientFileUpload: true,
		    },
};
