import './Footer.css'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="Footer" aria-label="Footer">
			<div className="FooterInner">
				<p className="FooterText">© {year} Steff Dierckx</p>
			</div>
		</footer>
	)
}
