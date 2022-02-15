import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@src/view/utils";

import $ from "./Article.module.scss";

type Props = {
  articles: any;
};

const Article: React.FC<Props> = ({ articles }) => {
  const content = articles.fields.content;

  return (
    <div className={$.content}>
      {content && (
        <section className={$.body} id={articles.fields.slug}>
          <h2>{articles.fields.title}</h2>
          {documentToReactComponents(content, richTextOptions())}
        </section>
      )}
    </div>
  );
};

export default Article;
