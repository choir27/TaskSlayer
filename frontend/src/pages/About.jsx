import Footer from "../components/Footer"
import Assets from "../components/Assets"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"

const About = () => {

  return (
    <div id = "wrapper">
      <NavPanel />
      {localStorage.getItem("id") ? <UserHeader idName = "nav"/> : <Header idName = "nav"/>}
      <div id="main">
        <article className="post">
          <section className="major">
            <h1 className="flex justifyContent">About K-pop</h1>
         
            <a 
            target = "_blank" 
            rel = "noreferrer"
            href = "https://www.youtube.com/watch?v=PkCXsFBjCMw&ab_channel=MBCkpop"
            className = "containerBox image">
              <img 
                src = {Assets.loveBattery} 
                alt = "Video Thumbnail of Korean Solo Artist Hong Jin-young"
                loading="lazy"
              />
            </a>
             
		        <p>Korean pop, commonly known as K-pop, is a global phenomenon that has captivated audiences worldwide. The genre originated in South Korea and has become a major force in the music industry, with K-pop groups known for their catchy tunes, high-energy dance routines, and visually stunning music videos. K-pop has exploded in popularity over the last decade, with numerous groups achieving international success and legions of fans who are passionate about the genre.</p>

            <a 
            target = "_blank"
            rel = "noreferrer"
            href = "https://www.youtube.com/watch?v=aS9yXY2J_qs&ab_channel=MBCkpop" 
            className="containerBox image">
              
              <img 
                src = {Assets.intoTheNewWorld} 
                alt = "Video Thumbnail of Korean Group Girls Generation (SNSD)"
                loading="lazy"
              />
      
            </a>

          <p>The history of K-pop dates back to the 1990s, when South Korea began to embrace globalization and Western-style culture. At that time, the country’s music industry was dominated by ballads and folk music, but this began to change as producers and record labels sought to create a new sound that would appeal to a younger, more global audience. The result was K-pop, which blended elements of Western pop music with traditional Korean sounds and styles. The early years of K-pop were marked by experimentation and a search for a distinct sound that would set Korean pop music apart from its Western counterparts.</p>
        
          <a 
          target = "_blank"
          rel = "noreferrer"
          href = "https://www.youtube.com/watch?v=jbo99VrxHqc&ab_channel=KBSWORLDTV"
          className = "image containerBox">

            <img 
            src = {Assets.idol} 
            alt = "Video Thumbnail of Korean Group Bangtan Boys (BTS)"
            loading="lazy"
            />
                
          </a>

        <p>Today, K-pop has become a highly competitive industry that is known for its intense training programs and rigorous standards. K-pop groups typically consist of several members who are selected through auditions and undergo years of training before they debut. The training process includes vocal lessons, dance instruction, language classes, and other skills that are necessary for success in the industry. K-pop groups also have a strong focus on image and presentation, with carefully curated concepts and costumes that reflect their unique identities.</p>

        <a 
        target = "_blank"
        rel = "noreferrer"
        href = "https://www.youtube.com/watch?v=C07uXXEwdIo&ab_channel=KBSWORLDTV"
        className = "image containerBox">
          

          <img 
          src = {Assets.iWillGoToYouLikeTheFirstSnow} 
          alt = "Video Thumbnail of Korean Solo Artist Ailee"
          loading="lazy"
          />

        </a>

        <p>There are many K-pop groups that have achieved global success, with some of the most popular including BTS, Blackpink, EXO, Twice, and Red Velvet. Each group has its own unique sound and style, with some groups known for their powerful vocals and others for their impressive dance routines. K-pop groups also have a strong online presence, with fans around the world following their every move on social media and video-sharing platforms like YouTube. The fandom surrounding K-pop is known for its passion and dedication, with fans often organizing elaborate fan projects and supporting their favorite groups through thick and thin.</p>

        <a
        target = "_blank"
        rel = "noreferrer"
        href = "https://www.youtube.com/watch?v=3W2EnCe4mCw&ab_channel=TV-People"
        className = "image containerBox">

          <img 
          src = {Assets.tears} 
          alt = "Video Thumbnail of Korean Retired Solo Artist So-Chan Whee"
          loading="lazy"
          />

        </a>
       
        <p>Overall, K-pop is a fascinating and dynamic genre that has taken the world by storm. Its history is rooted in South Korea’s cultural evolution and its success is a testament to the country’s creative and entrepreneurial spirit. With its catchy tunes, dazzling performances, and captivating visuals, K-pop is a true cultural force that shows no signs of slowing down anytime soon.</p>

      </section>

    </article>

  </div>

  <Footer/>

  <div id="copyright">
	  &copy; choir Design: HTML5 UP
  </div>

</div>
)
}

export default About