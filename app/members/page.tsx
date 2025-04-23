// import Link from "next/link";
import Image from "next/image";
import { getMembersList } from "../_libs/microcms";
import styles from "./page.module.css";



export default async function Page() {
  const data = await getMembersList({ limit: 100 });
  return (
    <div className="styles.container">
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member)=> (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt="tttt"
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
