import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Bostami Tailwind React Portfolio Template</title>
    </Helmet>
  );
};

export default PageTitle;
