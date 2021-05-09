import styles from "../styles/Header.module.scss";

const Header = () => {
	return (
		<section className={styles.headerSection}>
			<h1 className={styles.headerTitle}>Crypto Tracker</h1>
		</section>
	);
};

export default Header;
