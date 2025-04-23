import { getNewsDetail } from "../../_libs/microcms";

type Props = {
  params: {
    slug: string;
  }
}

export const revalidate = 0;

export default async function Page( {params}: Props ) {
  const data = await getNewsDetail(params.slug)

  return <div>{data.title}</div>;
}