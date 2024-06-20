import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
};

export default withPayload(withPayload(withPayload(nextConfig)));
