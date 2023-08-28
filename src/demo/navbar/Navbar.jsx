import './navbar.less'
export default function Navbar() {
	return (
		<>
			<nav>
				<a href="#">Home</a>
				<a href="#" className="selected">
					Projects
				</a>
				<a href="#">About</a>
			</nav>
			<main>Content area</main>

			<nav className="left">
				<a href="#">Home</a>
				<a href="#" className="selected">
					Projects
				</a>
				<a href="#">About</a>
			</nav>
			<main>Content area</main>

			<nav className="right">
				<a href="#">Home</a>
				<a href="#" className="selected">
					Projects
				</a>
				<a href="#">About</a>
			</nav>
			<main>Content area</main>
		</>
	)
}
