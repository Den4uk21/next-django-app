import Head from 'next/head'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Next.js!
        </h1>
      </main>
    </div>
  )
}

export default Home