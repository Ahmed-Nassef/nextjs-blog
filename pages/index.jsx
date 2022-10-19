import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
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
    </Layout>
  );
}
