// import React from 'react'
import './shape.less'
import svg from '/vite.svg'
function Ellipse() {
	return (
		<>
			<div className="circle"></div>
			<div className="ellipse"></div>
			<div className="half-ellipse"></div>
			<div className="half-ellipse-vertical"></div>
			<div className="quarter-ellipse"></div>
			<div className="half-ellipse-vertical"></div>

			<div className="half-ellipse-vertical"></div>

			<div className="rotate-picture">
				<img src={svg} />
			</div>
			<div className="rotate-picture-clip">
				<img src={svg} />
			</div>
		</>
	)
}

export default function Shape() {
	return (
		<div className="container">
			<Ellipse />
		</div>
	)
}
