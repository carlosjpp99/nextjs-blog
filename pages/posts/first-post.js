import Head from "next/head"
import Link from "next/link"
// import Script from "next/script"
import Layout from "../components/layout"
export default function firstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>My first post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Script component is only for make an example */}
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
        <h1>First Post</h1>
        <p>Sed aliquam voluptua eirmod. Quis ipsum ut et sed tempor amet ad sed lorem nonumy stet nulla feugait dolores euismod dolore. Stet esse justo magna consetetur blandit ipsum esse gubergren illum enim kasd. Vel sadipscing labore dolor elitr consetetur et nulla sed congue et. Te duo dolor clita et dolor nonumy no et stet volutpat. Nonumy exerci sit clita dignissim nulla dolore amet nonummy consetetur nostrud lorem tincidunt in voluptua vel erat sanctus.</p>
      </Layout>
    </>
  )
}