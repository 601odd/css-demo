import './elastic.less'
export default function Elastic() {
	return (
		<div className="test1-container">
			<input type="text" value={'hello'} />
			<span className="callout">
				Only letters, numbers, underscores (_) and hyphens (-) allowed!
			</span>
		</div>
	)
}
