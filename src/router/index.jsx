import boxShadow from '../demo/boxShadow/BoxShadow'
import navbar from '../demo/navbar/Navbar'
import pie from '../demo/Pie/pie'
import shape from '../demo/shape/Shape'
import glow from '../demo/glow/Glow'
import position from '../demo/position/Position'
import './demo.less'
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom'
import { createElement } from 'react'

const demoList = [
	{ component: boxShadow, path: '/boxshow', name: 'boxshow' },
	{ component: navbar, path: '/navbar', name: 'navbar' },
	{ component: pie, path: '/pie', name: 'pie' },
	{ component: shape, path: '/shape', name: 'shape' },
	{ component: glow, path: '/glow', name: 'glow' },
	{ component: position, path: '/position', name: 'position' },
]

export default function RouterConfig() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<DemoList />} />
				{demoList.map((item, index) => (
					<Route key={index} path={item.path} element={createElement(item.component)} />
				))}
			</Routes>
		</Router>
	)
}

const DemoList = () => {
	const navigate = useNavigate()
	return (
		<>
			<h1>navigate to demos</h1>
			<ol>
				{demoList.map((item, index) => (
					<li key={index} onClick={() => navigate(item.path)}>
						{item.name}
					</li>
				))}
			</ol>
		</>
	)
}
