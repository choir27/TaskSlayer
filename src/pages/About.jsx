import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect, useRef} from "react";

import Assets from "../components/Assets"


const About = () => {
  const [audio, setAudio] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");

  let audioPlayer = useRef({});

  useEffect(() => {
      try{
        audioPlayer.current = new Audio(currentAudio);
      }catch(err){
        throw new Error(err)
      }
  }, [currentAudio]);

  const handlePlayAudio = (audioFile) => {
    if (audio) return;
    setCurrentAudio(audioFile);
  };

  const toggleAudio = (file) =>{
    audio ? alert('Audio is off') : handlePlayAudio(file)
  }

  return (
    <div>
      <Header />
      <div id="main">
        <article className="post">
          <section className="major">
            <h1 className="flex justifyContent">About Illya</h1>
            <div className="flex column alignItems">

              <label
                id="audio"
                className="flex justifyContent"
                htmlFor="audioSwitch"
              >
                Turn audio off
              </label>

              <input 
              type = 'checkbox' 
              id = 'audioSwitch' 
              name = 'audioSwitch' 
              checked = {audio} 
              value = {audio} 
              onChange = {(e)=>{
                setAudio(e.currentTarget.checked)
              }}/>

            </div>
            
            <div className = 'image flex imageContainer'>

              <img 
                src = {Assets.HeavenSmile} 
                alt = 'Illya gif of her smiling and twirling around'
                loading="lazy"
              />

              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                <Button 
                cname = 'button' 
                size = 'large' 
                text = 'Change'
                onClick={(e)=>{
                e.preventDefault()
                toggleAudio(Assets.BerserkerAudio)
                }} />
                </li>
              </ul>

              
              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                <Button 
                cname = 'button' 
                size = 'large' 
                text = 'Play'
                onClick={(e)=>{
                e.preventDefault()
                try{
                  audioPlayer.current.play()
                }
                catch(err){
                  console.error(err)
                }
                }} />
                </li>
              </ul>


              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                  <Button 
                    cname = 'button' 
                    size ='large' 
                    text = 'pause' 
                    onClick = {(e)=>{
                      try{
                      e.preventDefault()
                      audioPlayer.current.pause()
                      }catch(err){
                        console.error(err)
                      }
                    
                  }}/>
                </li>
              </ul>

            </div>
  
		        <p>She is the daughter of Kiritsugu Emiya and Irisviel von Einzbern, both whom participated in the Fourth Holy Grail War, and the adoptive older sister of Shirou Emiya.  She appears in the following media: All Around Type-Moon, Capsule Servant, Carnival Phantasm, Character Material, Chibichuki!, Fate/hollow ataraxia, Fate/stay night, Fate/tiger colosseum, Fate/Unlimited Codes, Fate/Zero, Today's Menu for Emiya Family, All Around Type-Moon, Fate/kaleid liner, PRISMA&#9734;ILLYA, and Fate/Grand Order.  Illya was voiced by Mai Kadowaki in Japanese, Stephanie Sheh in the Fate series and Cynthia Martinez in the Prisma/FGO series in English.  A Female with a height of 133 cm and weight of 34 kg, Illya in the fate seriese was born in Germany but her birthday is still unknown; Illya was 8 in Fate/Zero, and 18 in Fate/Zero Unlimated.  In the Prisma series, Illya was 10 and eventually becomes 11 years old and is born in Fuyuki City, Japan; with a birthdate of July 20 and weighing 29kg.</p>

            <div className="image flex imageContainer">
              
              <img 
                src = {Assets.IllyaCat} 
                alt = 'Illya with cat ears with a bit of a perplexed expression'
                loading="lazy"
              />

             
              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                  <Button 
                  cname = 'button' 
                  size = 'large' 
                  text = 'Change'
                  onClick={(e)=>{
                  e.preventDefault()
                  toggleAudio(Assets.IllyaArcherAudio)
                  }} />
                </li>
              </ul>
  
          
              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                <Button 
                cname = 'button' 
                size = 'large' 
                text = 'Play'
                onClick={(e)=>{
                e.preventDefault()
                try{
                  audioPlayer.current.play()
                }
                catch(err){
                  console.error(err)
                }
                }} />
                </li>
              </ul>
            

              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                  <Button 
                    cname = 'button' 
                    size ='large' 
                    text = 'pause' 
                    onClick = {(e)=>{
                      try{
                      e.preventDefault()
                      audioPlayer.current.pause()
                      }catch(err){
                        console.error(err)
                      }
                    
                  }}/>

                </li>
              </ul>
      
            </div>

        <p>Einzbern, one of three families of Magi involved in the Holy Grail War, were responsible for creation of the vessel into which the souls of the defeated Servants would go. As such, Illya was prepared by her family to act as a living vessel for the Grail.  Unlike other homunculi who are born without eggs and wombs, Illyasviel originally was developed in her mother's womb from a fertilized egg to an embryo through the same process as ordinary people do.  In the Fate/Zero Drama CD, she was born out of love between Kiritsugu and Irisviel, to be Kiritsugu's reason for living when he comes back from the war.  The head of the family Jubstacheit von Einzbern, however, anticipated the possibility that Kiritsugu and Irisviel would fail to win the Fourth Holy Grail War, so he allowed Illyasviel to be born with modifications to allow her to become the Holy Grail should a Fifth Holy Grail War occur.  The modifying made her growth slow down abnormally and resulted in her childlike appearance while she is actually slightly older than Shirou. Irisviel was gifted a working womb so she gave natural birth to Illya.</p>
        
        <div className = 'image flex' id = ' imageContainer'>

          <img 
          src = {Assets.Believe} 
          alt = 'Illya believes and makes a fist'
          loading="lazy"
          />

          <ul className = 'special'>
            <li className = 'flex column justifyContent'>

              <Button 
              cname = 'button' 
              size = 'large' 
              text = 'Play'
              onClick={(e)=>{
              e.preventDefault()
              toggleAudio(Assets.IllyaCasterAudio)

              try{
                audioPlayer.current.play()
              }

              catch(err){
                console.error(err)
              }

              }} />

            </li>
          </ul>

              <ul className = 'special'>
                <li className = 'flex column justifyContent'>
                  <Button 
                    cname = 'button' 
                    size ='large' 
                    text = 'pause' 
                    onClick = {(e)=>{
                      try{
                      e.preventDefault()
                      audioPlayer.current.pause()
                      }catch(err){
                        console.error(err)
                      }
                    
                  }}/>
                </li>
              </ul>

        </div>

        <p>Illya is cheerful and outgoing, upbeat and generally exhibits a positive attitude. Possessing a friendly demeanor, she is easy to talk to and tends to be playful and mischievous. Deep inside, however, Illya is lonely as she has no friends her own age to play with and is often stuck inside the Einzbern castle. She asks those she feels comfortable around to call her 'Illya'.  Illya's personal interest in Shirou is conflicted due to the fact that Kiritsugu, whom she loved for he was her father, remained in Japan as Shirou's adoptive father after betraying her family by destroying the long-sought Grail. She feels that Kiritsugu abandoned her for Shirou, and is jealous of Shirou for that. When she first meets Shirou, she considers him as something of an older brother.  Though he is distrustful of her at first, he comes to like Illya, seeing her as a little sister. However at the same time, she also feels very close to Shirou for his relationship with Kiritsugu. As such, she becomes very affectionate and clingy towards him (like a younger sibling would) when Berserker is defeated, much to Saber and Rin's annoyance.  While her personality got more unstable and cold-blooded due to the Einzberns' inhuman treatment of her, she keeps the kindness inherited from her parents deep down in her heart</p>

        <div className = 'image flex justifyContent'>
          <img 
          src = {Assets.Freakout} 
          alt = 'Illya freaking out and grabbing her head by the sides with both hands'
          loading="lazy"
          />

          <ul className = 'special'>
            <li className = 'flex column justifyContent'>

              <Button 
              cname = 'button' 
              size = 'large' 
              text = 'Play'
              onClick={(e)=>{
              e.preventDefault()
              toggleAudio(Assets.Sitonai)

              try{
                audioPlayer.current.play()
              }

              catch(err){
                console.error(err)
              }

              }} />

            </li>
          </ul>

          <ul className = 'special'>
            <li className = 'flex column justifyContent'>
              <Button 
                cname = 'button' 
                size ='large' 
                text = 'pause' 
                onClick = {(e)=>{
                  try{
                  e.preventDefault()
                  audioPlayer.current.pause()
                  }catch(err){
                    console.error(err)
                  }
                
              }}/>
            </li>
          </ul>

        </div>

        <p>While exhibiting a cheerful and positive attitude, Illya is shy, easily flustered, and more innocent at the beginning. In her first fight, she is shown to be agile but rather cowardly. Also, Illya is an ardent fan of anime, much to Sella's disappointment. She secretly harbors feelings for her brother, Shirou, something that Ruby highlights frequently much to her embarrassment.She is also rarely (if ever) clingy when with him unlike her Fate/Stay Night counterpart.  When interacting with her friends at school, she shares a dynamic relationship with them where she usually acts as the voice of reason, a role that is very much like a Tsukkomi (a person who throws punchlines). This is particularly expressed when it comes to suggestively lewd or comedically immoral situations.She has a rather intense fascination with maid outfits, though she does not like the official Einzbern maid outfit Sella puts on at one point.  As the series progresses, Illya matures into a strong individual who's willing to face overwhelming odds for what she cares about while also maintaining her innocent nature and strong morals. This is proven when Illya also wants to protect everyone, especially her friends.It is shown as Illya proclaims that she will help Miyu and her world, even though Julian stated that it is almost impossible.  This characterizes the immeasurable amount of kindness Illya possesses that she is considered a natural genius in becoming friends with her enemies.  Despite her growth in maturity, she still holds behaviors fitting of her age such as childish tempers, trying to act mature, and being stubborn towards things she dislikes. Like all young girls her age she adores cute things like animals and stuffed toys. In stark contrast to her original version, she really likes cats.</p>

        <div className = 'image flex justifyContent'>

          <img 
          src = {Assets.IllyaCute} 
          alt = 'Illya finds a walnut on a snow tree'
          loading="lazy"
          />

          <ul className = 'special'>
            <li className = 'flex column justifyContent'>

              <Button 
              cname = 'button' 
              size = 'large' 
              text = 'Play'
              onClick={(e)=>{
              e.preventDefault()
              toggleAudio(Assets.WalnutGame)

              try{
                audioPlayer.current.play()
              }

              catch(err){
                console.error(err)
              }

              }} />

            </li>
          </ul>

          <ul className = 'special'>
            <li className = 'flex column justifyContent'>
              <Button 
                cname = 'button' 
                size ='large' 
                text = 'pause' 
                onClick = {(e)=>{
                  try{
                  e.preventDefault()
                  audioPlayer.current.pause()
                  }catch(err){
                    console.error(err)
                  }
                
              }}/>
            </li>
          </ul>

        </div>
       
        <p>Illya differs from her Fate/stay night counterpart in many different ways. She was born directly to be utilized in the fourth Fuyuki Holy Grail War, and she was given the knowledge needed at birth. Her father and mother, Kiritsugu and Irisviel, had been discussing completely abandoning the ritual and the Einzbern family, and Irisviel was given the final choice. They decided when Illya was eight months old, and sealed her magical abilities and her memories up until that point.   They remained within her as a separate personality, Kuro, that continued to accrue the same memories as her.  She was brought to Fuyuki from the Einzbern castle and raised as a normal child along with her adopted brother, Shirou. Their parents were away for long periods of time, so they were left with Sella and Leysritt much of the time. She had a normal life for ten years without any knowledge of her background, and had no idea about her parents' activities.</p>

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