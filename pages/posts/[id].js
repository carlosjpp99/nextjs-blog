import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../components/date';
import utilStyles from "../../styles/utils.module.css";

// export default function Post() {
//   return <Layout>...</Layout>;
// }
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* <br /> */}
      {/* {postData.id} */}
      {/* {/* <br /> */}
      {/* 
      // This code is before applied CSS, the explanation is on the same page:
      // https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page 
      */}
      {/* <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}