import {Link} from "react-router-dom"
import Footer from "../components/Footer"
import Assets from "../components/Assets"
import Button from "../components/Button"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"

const HomeGuest = () => {
  return (
	<div id="wrapper">
	<NavPanel />
		<Header idName = "nav"/>
		<div id = "main">

			<article className = "post featured">

				<section className = "major">

					<h1 className = "flex justifyContent">
						<Link to = "/">Welcome to K-pop Wired!</Link>
					</h1>

					<p>A site dedicated to introducing the culture of the Korean Pop industry, giving users the opportunity to share their own favorite tunes and create unique playlists with varying music tracks!</p>
				</section>

				<Link 
				to="/register" 
				className="image main"
				>
					<img 
					src= {Assets.SNSD} 
					alt="All members of the Korean Pop group Girls Generation wearing formal dresses posing" 
					loading="lazy"
					/>
				</Link>
					
				<ul className = "special">
					<li>
						<Button 
							domain = "/register" 
							size = "large" 
							cname = "button"
							text = "Register Here"
						/>
					</li>
				</ul>

			</article>

			<section className = "posts">

				<article>
					<section>

						<h2>
							<Link 
								to = "/dashboard">
								Users Content
							</Link>
						</h2>

						<Link 
							to="/dashboard" 
							className="image main"
						>
							<img 
							src= {Assets.BTS} 
							alt="All members of the Korean pop guy group Bangtan Boys (BTS) smiling" 
							loading="lazy"
							/>
						</Link>
			
						<p>See what content users have posted using accounts they have registered through this website.</p>
					
					</section>

					<ul className="special">
						<li>
							<Button 
								domain = "/dashboard" 
								size = "large"
								cname = "button" 
								text = "See Dashboard"
							/>
						</li>
					</ul>

				</article>
				
				<article>
					<section>

						<h2>
							<Link 
								to = "/about">
								What is K-pop?
							</Link>
						</h2>
		
						<Link 
							to = "/about"
							className="image main"
						>
							<img 
								src= {Assets.Ailee} 
								alt="Korean Solo Artist Ailee smiling for her tenth anniversary" 
								loading="lazy"
							/>
						</Link>
								
						<p>Find out more about the culture of K-pop, the industry's history, and the many groups within.</p>

					</section>

					<ul className="special">
						<li>
							<Button 
								domain = "/about"
								size = "large"
								cname = "button"
								text = "Here for More"
							/>
						</li>
					</ul>

				</article>

			</section>
		</div>

		<Footer/>

		<div id="copyright">
			&copy; choir Design: HTML5 UP
		</div>
	</div>
  )
}

export default HomeGuest