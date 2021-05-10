import Head from "next/head";

export default function Layout({ children, title }) {
	return (
		<section>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Crypto tracker website showcasing prices of different cryptocurrencies."
				/>
				<meta name="og:title" content={title} />
				<title>{title}</title>
			</Head>
			<main>{children}</main>
		</section>
	);
}
