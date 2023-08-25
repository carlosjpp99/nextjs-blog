import Head from "next/head"
import Layout from "../components/layout"

/**
 * This React hook is from Next.js team
 * It's highly recommend it if I'm fetching data on the client side.
 * It handles `caching`, 
 * It handles `revalidation`, 
 * It handles `focus tracking`, 
 * It handles `refetching`
 */
import useSWR from 'swr';


export default function secondPost({ context }) {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>My second post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Second Post</h1>
        <p>This a representation, in code, about `SWR`. If I need to follow the Client-side Rendering approach. It's very recommended to use the React hook that Next.js has created for data fetching.<a href="https://swr.vercel.app/">SWR</a></p>
        <p>
          {data.name}
        </p>
      </Layout>
    </>
  )
}

