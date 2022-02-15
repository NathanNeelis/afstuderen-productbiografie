import React from "react";
import { Node } from "@contentful/rich-text-types";

import $ from "./EmbedAsset.module.scss";

interface Props {
  asset: Node;
}

const EmbedAsset: React.FC<Props> = ({ asset }) => {
  const { data } = asset;
  const assetUrl = `https:${data.target.fields.file.url}`;

  return (
    <img
      src={assetUrl}
      alt={data.target.fields.description}
      className={$.embeddedAsset}
    />
  );
};

export default EmbedAsset;
