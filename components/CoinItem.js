import Link from "next/link";
import styles from "../styles/Home.module.scss";

const CoinItem = ({ item }) => {
	const formatter = new Intl.NumberFormat("en-US");

	const {
		id,
		name,
		logo_url,
		price,
		market_cap,
		"1d": { price_change },
	} = item;

	const currentPriceChange = price / (price - price_change);
	const floatPrice = parseFloat(price);

	return (
		<Link href="/[id]" as={`/${id}`}>
			<tr className={styles.coinTr}>
				<td className={`${styles.coinDesc} ${styles.coinID}`}>{id}</td>
				<td className={styles.coinNameWrap}>
					<img
						src={logo_url}
						alt={name}
						height={150}
						width={150}
						className={styles.coinImg}
					/>
					<h4 className={(styles.coinName, styles.coinDesc)}>
						{name}
					</h4>
				</td>
				<td className={`${styles.coinDesc} ${styles.coinPrice}`}>
					${floatPrice.toFixed(2)}
				</td>
				<td
					className={`${styles.coinDesc} ${styles.coinChange} ${
						currentPriceChange > 1
							? styles.priceChangeSuccess
							: styles.priceChangeFailure
					}`}
				>
					{currentPriceChange.toFixed(2)}%
				</td>
				<td className={`${styles.coinDesc} ${styles.coinMarketCap}`}>
					${formatter.format(market_cap)}
				</td>
			</tr>
		</Link>
	);
};

export default CoinItem;
