import PropTypes from 'prop-types'
import { Component } from 'react'
export class FieldLayout extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				<header className="text-center mb-10 mt-10">
					<button onClick={() => this.props.handleReset()}>Начать заново</button>
					<div className="mt-5 font-medium">
						{this.props.winner.length ? (
							<span>Игра окончена</span>
						) : (
							<span>Ходит: {this.props.info}</span>
						)}
					</div>
				</header>
				<main className="relative m-auto max-w-xs max-h-80 overflow-hidden">
					<ul className="h-full w-full grid grid-c-100 grid-r-100">
						{this.props.children}
					</ul>
					<div className={this.props.winner.length ? 'win top-0' : 'win -top-full'}>
						<p
							className={
								this.props.winner.length
									? 'player-win text-xl font-medium'
									: 'text-xl font-medium'
							}
						>
							{this.props.winner.at(1)}
						</p>
						<p>{this.props.winner.at(0)}</p>
					</div>
				</main>
			</>
		)
	}
}

FieldLayout.propTypes = {
	info: PropTypes.string,
	handlerReset: PropTypes.func,
	winner: PropTypes.array,
}
