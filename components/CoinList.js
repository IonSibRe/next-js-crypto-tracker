import styles from "../styles/Home.module.scss";
import CoinItem from "./CoinItem";

const CoinList = ({ data }) => {
	return (
		<section className={styles.coinList}>
			<table className={styles.coinTable}>
				<thead className={styles.coinHead}>
					<tr className={`${styles.coinTr} ${styles.coinHeadersTr}`}>
						<th
							className={`${styles.coinDesc} ${styles.coinTh} ${styles.coinThID}`}
						>
							ID
						</th>
						<th
							className={`${styles.coinDesc} ${styles.coinTh} ${styles.coinThName}`}
						>
							name
						</th>
						<th
							className={`${styles.coinDesc} ${styles.coinTh} ${styles.coinThPrice}`}
						>
							price
						</th>
						<th
							className={`${styles.coinDesc} ${styles.coinTh} ${styles.coinThChange}`}
						>
							price change
						</th>
						<th
							className={`${styles.coinDesc} ${styles.coinTh} ${styles.coinThMarketCap}`}
						>
							market cap
						</th>
					</tr>
				</thead>

				<tbody className={styles.coinBody}>
					{data.map((item) => {
						return <CoinItem item={item} key={item.id} />;
					})}
				</tbody>
			</table>
		</section>
	);
};

export default CoinList;
