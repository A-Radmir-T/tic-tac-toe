import PropTypes from 'prop-types'

import styles from './field.module.scss'

export const FieldLayout = ({ children, info, handleReset, winner }) => {
	return (
		<>
			<header className={styles.header}>
				<button onClick={() => handleReset()}>Начать заново</button>
				<div className={styles.info}>
					<span>{info}</span>
				</div>
			</header>
			<main className={styles.main}>
				<ul className={styles.field}>{children}</ul>
				<div className={winner.length ? `${styles.win} ${styles.visible}` : styles.win}>
					<p className={styles.player}>{winner.at(1)}</p>
					<p>{winner.at(0)}</p>
				</div>
			</main>
		</>
	)
}

FieldLayout.propTypes = {
	info: PropTypes.string,
	handlerReset: PropTypes.func,
	winner: PropTypes.array,
}
