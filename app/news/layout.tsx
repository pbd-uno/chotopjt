import Sheets from "../_components/Sheet";
import Hero from "../_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return(
    <>
      <Hero title="News" sub="ニュース"></Hero>
      <Sheets>{children}</Sheets>
    </>

  );
}
