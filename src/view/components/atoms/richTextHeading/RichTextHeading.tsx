import React, { ReactNode } from "react";

import $ from "./RichTextHeading.module.scss";

interface Props {
  children: ReactNode;
}

const RichTextHeading: React.FC<Props> = ({ children }) => {
  return <span className={$.green}>{children}</span>;
};

export default RichTextHeading;
