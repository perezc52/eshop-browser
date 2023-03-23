import Head from 'next/head'
import Link from 'next/link'
import { getGamesAmerica } from 'nintendo-switch-eshop'

export default function Details({ game }) {
    return (
        <>
            <Head>
                <title>{game.title}</title>
            </Head>
            <div>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <Link href="/">Back to all games</Link>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const data = await getGamesAmerica()
    const paths = data.map(el => ({params: {slug: el.slug}}))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const data = await getGamesAmerica()
    const game = data.find(game => game.slug === params.slug)
    return {
        props: { game }
    }
}