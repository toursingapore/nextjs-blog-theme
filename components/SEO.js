import Head from 'next/head';

export default function SEO({ title, description, href }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="canonical" href={href} />
    </Head>
  );
}
