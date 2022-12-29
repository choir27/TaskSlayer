import {Link} from 'react-router-dom'
import Header from "../components/Header"
import Button from "../components/Button"
import HeavenArt from "../assets/home/Heaven Fanart.jpg"
import Drawing from "../assets/home/Drawing.jpg"
import Melusine from "../assets/home/melusine.jpg"
import Footer from "../components/Footer"
const Home = () => {
  return (
   <div>

						<Header />
				

					<div id="main">


						<article className = 'post featured'>
							<header className = 'major'>
							<h2 className = 'flex justifyContent'><Link to = '/about'>Welcome to the Illya Site!</Link></h2>
									<p>A wholesome site dedicated to the cutest student and sister servant Illyasviel Von Einzbern; with her cute design, voice, and outfits, this site introduces it all.  Register/Login to see exclusive content made from our various users!</p>
									</header>
									<a href="/account" className="image main"><img src= {Melusine} alt="" /></a>

									<ul className = 'special'>
									<li><Button domain = '/account' size = 'large' cname = 'button' text = 'Here for More!'/></li>
									</ul>

						</article>

						<section className = 'posts'>
							<article>
								<header>
								<h2><Link to = '/dashboard'>Users Content</Link></h2>
								<a href="/dashboard" className="image main"><img src= {Drawing} alt="" /></a>

								<p>See what content users have posted using accounts they have registered through this website.</p>
								
								</header>
								<ul className="special">
									<li><Button domain = '/dashboard' size = 'large' cname = 'button' text = 'See Dashboard'/></li>
								</ul>
							</article>


							
							<article>
								<header>
									<h2><Link to = '/about'>Who is Illya?</Link></h2>
									<Link to = '/media' className="image main"><img src= {HeavenArt} alt="" /></Link>

									<p>Find out more about the character Illya, as well as her many different variations that have been created over the years.</p>
								</header>
								<ul className="special">
									<li><Link to = "/media" className="button large">Click here to find out more!</Link></li>
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

export default Home
