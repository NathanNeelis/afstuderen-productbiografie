/* eslint-disable indent */
import React, { ReactNode } from "react";
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";
import {
  //     EmbedProduct,
  //     EmbedHyperlink,
  EmbedAsset,
  //     EmbedTeam,
  //     EmbedYoutube,
  RichTextHeading,
  //     RichTextParagraph,
} from "@src/view/components";

export function richTextOptions() {
  return {
    renderNode: {
      [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => {
        return (
          <h2 className="headline">
            <RichTextHeading>{children}</RichTextHeading>
          </h2>
        );
      },
      // [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => {
      //     return (
      //         <h3 className="headline">
      //             {/* <RichTextHeading>{children}</RichTextHeading> */}
      //         </h3>
      //     );
      // },
      // [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => {
      //     return <RichTextParagraph>{children}</RichTextParagraph>;
      // },
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        return <EmbedAsset asset={node} />;
      },
      //   [INLINES.EMBEDDED_ENTRY]: (node: Node) => {
      //     const { data } = node;
      //     const type = data.target.sys.contentType?.sys.id;
      //     const productCode = data.target.fields?.productCode;
      //     switch (type) {
      //       case "products":
      //         return <EmbedProduct productCode={productCode} />;
      //       case "team":
      //         return <EmbedTeam player={node} />;
      //       case "content": // This is still an option in Contentful.
      //       default:
      //         return null; // Just return, nothing happends
      //     }
      //   },
      //   [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
      //     const { data } = node;
      //     const { uri } = data;
      //     if (uri.indexOf("https://www.youtube.com/embed/") !== -1) {
      //       return <EmbedYoutube url={uri} />;
      //     }
      //     return <EmbedHyperlink hyperlink={node}>{children}</EmbedHyperlink>;
      //   },
      //   [INLINES.ASSET_HYPERLINK]: (node: Node, children: ReactNode) => {
      //     return <EmbedHyperlink hyperlink={node}>{children}</EmbedHyperlink>;
      //   },
    },
  };
}
