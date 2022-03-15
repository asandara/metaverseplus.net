import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="./logo.svg"
        media="(prefers-color-scheme: light)"
      />

      <link rel="icon" href="./logo.svg" media="(prefers-color-scheme: dark)" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Metaverse Plus",
  keywords:
    "Gaming , Game , Game Of Tank , Metaverse , Metaverse Game , Metaverse Game Of Tank , Metaverse Game Of Tank , Blockchain , Coin , Game Studio , Unreal Engine , Metaverse Plus , Marketplace",
  description:
    "Establishing a virtual world is one of the objectives of humanity in the coming future. Obviously, there will be a lot of tough and complex paths will show up that should be passed. Passing these ways needs a lot of effort. Metaverse Plus is working to achieve this goal.",
};

export default Meta;
