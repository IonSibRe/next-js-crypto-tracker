import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Coin = ({ singleCoin }) => {
	const formatter = new Intl.NumberFormat("en-US");
	const {
		id,
		name,
		symbol,
		logo_url,
		price,
		market_cap,
		"1d": { price_change },
	} = singleCoin;

	const currentPriceChange = price / (price - price_change);
	const floatPrice = parseFloat(price);

	return (
		<Layout title={`Crypto Tracker | ${symbol}`}>
			<section className={styles.singleCoinSection}>
				<div className={styles.singleCoinCard}>
					<div className={styles.singleCoinCardInnerWrap}>
						<div className={styles.singleCoinCardHeader}>
							<img
								src={logo_url}
								alt={name}
								className={styles.singleCoinCardImg}
							/>
						</div>
						<div className={styles.singleCoinCardText}>
							<div className={styles.singleCoinCardItem}>
								<h3
									className={`${styles.singleCoinCardItemInfo} ${styles.singleCoinCardItemDesc}`}
								>
									ID:
								</h3>
								<h3 className={styles.singleCoinCardItemDesc}>
									{id}
								</h3>
							</div>
							<div className={styles.singleCoinCardItem}>
								<h3
									className={`${styles.singleCoinCardItemInfo} ${styles.singleCoinCardItemDesc}`}
								>
									name:
								</h3>
								<h3 className={styles.singleCoinCardItemDesc}>
									{name}
								</h3>
							</div>
							<div className={styles.singleCoinCardItem}>
								<h3
									className={`${styles.singleCoinCardItemInfo} ${styles.singleCoinCardItemDesc}`}
								>
									price:
								</h3>
								<h3 className={styles.singleCoinCardItemDesc}>
									${floatPrice.toFixed(2)}
								</h3>
							</div>
							<div className={styles.singleCoinCardItem}>
								<h3
									className={`${styles.singleCoinCardItemInfo} ${styles.singleCoinCardItemDesc}`}
								>
									price change:
								</h3>
								<h3
									className={` ${
										styles.singleCoinCardItemDesc
									} ${
										currentPriceChange > 1
											? styles.priceChangeSuccess
											: styles.priceChangeFailure
									}`}
								>
									{currentPriceChange.toFixed(2)}%
								</h3>
							</div>
							<div className={styles.singleCoinCardItem}>
								<h3
									className={`${styles.singleCoinCardItemInfo} ${styles.singleCoinCardItemDesc}`}
								>
									market cap:
								</h3>
								<h3 className={styles.singleCoinCardItemDesc}>
									${formatter.format(market_cap)}
								</h3>
							</div>
						</div>
						<div className={styles.singleCoinCardHomeBtnWrap}>
							<Link href="/">
								<a className={styles.singleCoinCardHomeBtn}>
									back home
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_KEY}&ids=${context.params.id}`
	);
	const data = await res.json();
	const singleCoin = data[0];

	return {
		props: {
			singleCoin,
		},
	};
}

export default Coin;
