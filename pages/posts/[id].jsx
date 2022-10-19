import React from "react";
import Layout from "../../components/layout";
import Date from "../../components/Date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

// Add this import at the top of the file
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.Date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
