import Head from "next/head";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@src/view/utils";
import { Article } from "@src/view/components";

import $ from "./index.module.scss";

interface Props {
  items: Array<any>;
}

const Home: React.FC<Props> = ({ items }) => {
  const articles = items;

  return (
    <div className={$.container}>
      <Head>
        <title>Nathan Neelis Product Biografie</title>
        <meta name="description" content="Productbiografie" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        <nav className={$.nav}>
          <p className={$.title}>Inhoudsopgave</p>
          <ul>
            <li>
              <a href="#design-brief">Design brief</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className={$.article}>
          {articles.map((article) => (
            <Article articles={article} key={article.title} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCES_TOKEN as string,
  });

  const item = await client.getEntries({ content_type: "productbiografie" });
  return {
    props: {
      items: item.items,
    },
  };
}

export default Home;
