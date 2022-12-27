import {Link} from 'react-router-dom'
import Header from "../components/Header"
import Gameplay from "../assets/home/Gameplay.PNG"
import HeavenArt from "../assets/home/Heaven Fanart.jpg"
import Sitonai from "../assets/home/sitonai.jpg"
import Drawing from "../assets/home/Drawing.jpg"
import Melusine from "../assets/home/melusine.jpg"
import Footer from "../components/Footer"
const Home = () => {
  return (
   <div>

               <div id = 'intro' >
      <Link to = '/'><h1>Illya Fansite</h1></Link>
               </div>


						<Header />
				

					<div id="main">


						<article className = 'post featured'>
							<header className = 'major'>
							<h2 className = 'flex justifyContent'><Link to = '/about'>Who is Illya?</Link></h2>
									<p>A wholesome site dedicated to the cutest student and sister servant Illyasviel Von Einzbern; with her cute design, voice, and outfits, this site introduces it all.</p>
									</header>
									<a href="/about" className="image main"><img src= {Melusine} alt="" /></a>

									<ul className = 'special'>
									<li><a href="/about" className="button large">Here for More!</a></li>
									</ul>

						</article>

						<section className = 'posts'>
							<article>
								<header>
								<h2><Link to = '/dashboard'>Users Content</Link></h2>

								<p>See what content users have posted using accounts they have registered through this website.</p>
								
								</header>
								<a href="/dashboard" className="image main"><img src= {Drawing} alt="" /></a>
								<ul className="special">
									<li><Link to="/dashboard" className="button large">See Dashboard</Link></li>
								</ul>
							</article>


							<article>
								<header>
									<h2><Link to = '/gameplay'>Gameplay of Illya</Link></h2>
									<p>See the different variations of Illya that show up in varying video games.</p>
								</header>
								<Link to="/gameplay" className="image main"><img src= {Sitonai} alt="" /></Link>
								<ul className="special">
									<li><Link to="/gameplay" className="button large">See Gameplay</Link></li>
								</ul>
							</article>

							<article>
								<header>
									<h2><Link to = '/about'>Who is Illya?</Link></h2>
									<p>A wholesome site dedicated to the cutest student and sister servant; with her cute design, cute voice, and cute outfits, this site introduces it all.</p>
								</header>
								<Link to = '/media' className="image main"><img src= {HeavenArt} alt="" /></Link>
								<ul className="special">
									<li><Link to = "/media" className="button large">Click here to find out more!</Link></li>
								</ul>
							</article>

							<article>
								<header>
									<h2><Link to = '/gameplay'>Who is Illya?</Link></h2>
									<p>A wholesome site dedicated to the cutest student and sister servant; with her cute design, cute voice, and cute outfits, this site introduces it all.</p>
								</header>
								<Link to ='/gameplay' className="image main"><img src= {Gameplay} alt="" /></Link>
								<ul className="special">
									<li><Link to ='/gameplay' className="button large">Click here to find out more!</Link></li>
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
