import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./layout.module.css";
import utilstyle from "../styles/utils.module.css";
import Head from "next/head";

const name = "Ahmed Nassef";
export const siteTitle = "Ahmed Nassef blog";

const Layout = ({ children, home }) => {
  return (
    <div className={style.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header className={style.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilstyle.borderCircle}
              height={144}
              width={144}
              alt='profile'
            />
            <h1 classNmae={utilstyle.heading2x1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className={utilstyle.borderCircle}
                  height={108}
                  width={108}
                  alt=''
                />
              </a>
            </Link>
            <h2 className={utilstyle.headingLg}>
              <Link href='/'>
                <a className={utilstyle.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <main>{children}</main>
        {!home && (
          <div className={style.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Layout;
