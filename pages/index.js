import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CoinList from "../components/CoinList";
import styles from "../styles/Home.module.scss";

const Home = ({ data }) => {
	const [coinSearched, setCoinSearched] = useState("");
	const [filteredData, setFilteredData] = useState(data);
	const date = new Date();

	useEffect(() => {
		setFilteredData(
			data.filter((item) =>
				item.name.toLowerCase().includes(coinSearched.toLowerCase())
			)
		);
	}, [coinSearched]);

	return (
		<Layout title="Crypto Tracker">
			<section className={styles.homeSection}>
				<section className={styles.homeInnerSection}>
					<Header />
					<div className={styles.searchBarWrap}>
						<input
							type="text"
							className={styles.searchBar}
							placeholder="Bitcoin, Ethereum, ..."
							onChange={(e) => setCoinSearched(e.target.value)}
						/>
					</div>
					<CoinList data={filteredData} />
				</section>
				<footer className={styles.footer}>
					<p className={styles.footerText}>
						Copyright &copy; {date.getFullYear()} Crypto Tracker.
						All rights reserved.
					</p>
				</footer>
			</section>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_KEY}&per-page=20`
	);

	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

export default Home;
