import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { getNewsList } from "./_libs/microcms";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";


export default async function Home() {
  const name = "世界";

  const data = await getNewsList({limit: 2})

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>私たちは世界をリードするグローバルテックカンパニーです。</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt="tttt"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <div>
        <Link href="/members">メンバー</Link>
      </div>
    </>
  );
}
