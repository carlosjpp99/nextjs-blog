import Head from "next/head"
import Layout from "../components/layout"
export default function secondPost({ context }) {
  let c = context.props

  return (
    <>
      <Layout>
        <Head>
          <title>My second post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Second Post</h1>
        <p>This a representation, in code, about `getServerSideProps`</p>
        <p>
          {c}
        </p>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}