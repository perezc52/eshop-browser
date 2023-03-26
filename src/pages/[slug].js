import Head from 'next/head'
import Link from 'next/link'

export default function Details({ game }) {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <div>
                <h1></h1>
                <p></p>
                <Link href="/">Back to all games</Link>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return {

    }
}

export async function getStaticProps({ params }) {

    return {
        props: {}
    }
}