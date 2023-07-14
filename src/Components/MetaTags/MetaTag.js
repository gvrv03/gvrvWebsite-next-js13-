import Head from "next/head";
import React from "react";

const MetaTag = () => {
  return (
    <Head>
      {/* Style CDN  */}
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
      />

      {/* <!-- Primary Meta Tags --> */}
      <title>Gaurav Narnaware || Personal Website</title>
      <meta name="title" content="Gaurav Narnaware || Personal Website" />
      <meta
        name="description"
        content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta
        property="og:title"
        content="Gaurav Narnaware || Personal Website"
      />
      <meta
        property="og:description"
        content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
      />
      <meta
        property="og:image"
        content="https://metatags.io/images/meta-tags.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="Gaurav Narnaware || Personal Website"
      />
      <meta
        property="twitter:description"
        content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/images/meta-tags.png"
      />
    </Head>
  );
};

export default MetaTag;
