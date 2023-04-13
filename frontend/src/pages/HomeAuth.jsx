import {Link} from 'react-router-dom'
import Footer from "../components/Footer"
import Assets from "../components/Assets"
import Button from "../components/Button"
import UserHeader from "../components/UserHeader"
import {MyContext} from "../middleware/Context"
import {useContext, 
		useEffect, 
		useState} from "react"
import NavPanel from "../components/NavPanel"

const HomeAuth = () => {

	const userContext = useContext(MyContext);

	const [user,setUser] = useState({});

	useEffect(()=>{
    	userContext.then(data=>{
    	  setUser(data)
    	})
  	},[user, userContext])


  return (
	<div id = "wrapper">
				<NavPanel />
		<UserHeader idName = "nav"/>
			<div id="main">
				<article className = "post featured">
					<section className = "major">
						<h1 className = "flex justifyContent">
							<Link to = "/">Welcome {user.userName} to K-pop Wired!</Link>
						</h1>

						<p>A wholesome site dedicated to the cutest student and sister servant Illyasviel Von Einzbern; with her cute design, voice, and outfits, this site introduces it all.  Add various content to your customized account!</p>
					</section>
		
					<Link 
					to= "/account" 
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
								domain = "/account" 
								size = "large"
								cname = "button" 
								text = "See Account"
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
									Who is Illya?
								</Link>
							</h2>
							
							<Link 
								to = "/about" 
								className="image main">
								<img 
								src= {Assets.Ailee} 
								alt="Korean Solo Artist Ailee smiling for her tenth anniversary" 
								loading="lazy"
							/>
							</Link>
									
							<p>Find out more about the character Illya, as well as her many different variations that have been created over the years.</p>

						</section>

						<ul className="special">
							<li>
								<Button 
									domain = "/about" 
									size = "large"
									cname = "button" 
									text = "Here for More!"
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

export default HomeAuth