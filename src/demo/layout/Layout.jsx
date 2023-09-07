import './layout.less'

export default function Layout() {
	return (
		// <div className='parent'>
		// <div className="left">left</div>
		// <div className="right">right</div>
		// </div>
		<div className="parent">
			{Array.from({ length: 16 }).map((_, i) => (
				<div key={i} className="demo">
					{i + 1}
				</div>
			))}
		</div>
	)
}
