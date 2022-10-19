import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";

export const getStaticProps = async () => {
  const allPosts = getSortedPostsData();

  return {
    props: {
      allPosts,
    },
  };
};

export default function Home({ allPosts }) {
  console.log("all posts", allPosts);
  return (
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Ahmed Nassef, a 16 yo kid who's in love with programming
          <br /> i will be writing blogs here
        </p>
        <p></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
