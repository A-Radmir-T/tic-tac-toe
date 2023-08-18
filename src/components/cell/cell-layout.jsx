import PropTypes from 'prop-types'

import styles from './cell.module.scss'

export const CellLayout = ({ id, children, handlerOnClick }) => {
	return (
		<li className={styles.cell} onClick={() => handlerOnClick(id)}>
			<p>{children}</p>
		</li>
	)
}

CellLayout.propTypes = {
	handlerOnClick: PropTypes.func,
	id: PropTypes.string,
}
