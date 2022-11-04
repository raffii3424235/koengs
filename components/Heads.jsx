import Head from "next/head";

export const Heads = () => {
  return (
    <Head>
      <title>Kungs-Portfolio-Website</title>
      <meta name="description" content="A Portfolio Website" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=outfit@400,900,800,300,500,600,200,100,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};
