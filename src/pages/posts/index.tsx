import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import Link from "next/link";

import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              ratione vitae neque sapiente qui error totam similique.{" "}
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              ratione vitae neque sapiente qui error totam similique.{" "}
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              ratione vitae neque sapiente qui error totam similique.{" "}
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "postid")],
    {
      fetch: ["title", "content"],
      pageSize: 100,
    }
  );
  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
