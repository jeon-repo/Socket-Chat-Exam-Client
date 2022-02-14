import { NextPage } from "next";
import Head from "next/head";

// Custom Type
interface TitleProps {
  text: string;
}
// Custom Type 적용
const Title: NextPage<TitleProps> = ({ text }) => {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
};

export default Title;
