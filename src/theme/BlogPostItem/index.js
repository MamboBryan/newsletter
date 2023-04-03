import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function BlogPostItemWrapper(props) {
  const { colorMode } = useColorMode();
  return (
    <>
      <BlogPostItem {...props} />
      <br></br>
      <Giscus
        id="comments"
        repo="dipakparmar/docs-diary"
        repoId="R_kgDOJEbZ9w"
        category="Comments"
        categoryId="DIC_kwDOEFKzp84CPOcp"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
