/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.scdn.co'],
        unoptimized: true,
    },
    redirects: async () => {
        return [
            {
                source: '/x',
                destination: 'https://x.com/craviottoalex',
                permanent: true,
            },
            {
                source: '/twitter',
                destination: 'https://x.com/craviottoalex',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/alexcraviotto',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/alexcraviotto',
                permanent: true,
            },
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/@craviottoalex',
                permanent: true,
            }
        ]
    },
};
export default nextConfig;
