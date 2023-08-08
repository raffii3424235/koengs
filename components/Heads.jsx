import Head from "next/head";

export const Heads = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="A Portfolio Website by kungs" />
      <link rel="icon" href="/logo.png" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=outfit@400,900,800,300,500,600,200,100,700&display=swap"
        rel="stylesheet"
      ></link>
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
};
