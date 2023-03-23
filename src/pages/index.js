import Head from 'next/head'
import {getGamesAmerica} from 'nintendo-switch-eshop'
import Link from 'next/link'

export default function Home({ data }) {
  const gameElements = data.map((el,i) => {
    return (
      <div key={i}>
       <Link href={`/${el.slug}`}><h2>{el.title}</h2></Link>
      </div>
    )
  })
  return (
    <>
      <Head>
        <title>E-shop Browser</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {gameElements}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await getGamesAmerica()
  return {
    props: {
      data: data
    }
  }
}
