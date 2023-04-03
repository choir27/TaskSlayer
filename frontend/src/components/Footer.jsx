import {useState} from "react"
import axios from "axios"
import {toast} from "react-toastify"

const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
const NAME_REGEX = /^[a-zA-Z]*$/;

const Footer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //grab values from input set to states and make message POST request
    const handleSubmit = (e) => {
        try{
            e.preventDefault();

            if(!name || !email || !message){
                toast.error("Please Input All Fields");
                return;
            };

            const checkEmail = EMAIL_REGEX.test(email);
            const checkName = NAME_REGEX.test(name);

            if(!checkEmail){
                toast.error("Please Input Proper Email");
                return;
            }

            if(!checkName){
                toast.error("Please Input Proper Name");
                return;
            }

            const formData = new URLSearchParams();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("message", message);

            axios.post("https://illya-site-backend-production.up.railway.app/sendMessage", 
            formData, 
            {}).then(res=>{
                if(res){
                    console.log(res);
                    window.location.reload();
                  }
            })
              .catch(err=>{
                    console.log(err);
                    return;
                })
        }catch(err){
            console.error(err);
        }
        
    }

    return (
        <footer id="footer">
            <section>
                <form onSubmit = {handleSubmit}>
                    <div className="fields">
                        <div className="field">
                            <label>Name</label>
                            <input placeholder = "Put your name here"
                                type="text"
                                name="name"
                                onChange = {e=>setName(e.target.value)}
                                value = {name}
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                                <input 
                                    placeholder = "Put your email here" 
                                    type="text"
                                    name="email"
                                    onChange = {e=>setEmail(e.target.value)}
                                    value = {email}
                                />
                        </div>
                        <div className="field">
                            <label>Message</label>
                                <textarea 
                                placeholder = "Put your message here" 
                                name="message"
                                onChange = {e=>setMessage(e.target.value)}
                                value = {message}/>
                        </div>
                    </div>

                    <input 
                        className = "button" 
                        type="submit" 
                        value="Send Message"
                    />
                </form>
            </section>

            <section className="split contact">
                <section>
                    <h3>Email</h3>
                    <p>richardchoi54@gmail.com</p>
                </section>

                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li><a 
                            rel="noreferrer" 
                            target = "_blank" 
                            href="https://twitter.com/choir241" 
                            className="icon fa-twitter"
                            >
                                <p className = "hidden">Twitter</p>
                            </a>
                        </li>

                        <li><a 
                            rel="noreferrer" 
                            target = "_blank" 
                            href="https://www.linkedin.com/in/richard-choir/" 
                            className="icon fa-linkedin"
                            >
                                <p className = "hidden">LinkedIn</p>
                            </a>
                        </li>

                        <li>
                            <a 
                            rel="noreferrer" 
                            target = "_blank" 
                            href="https://www.instagram.com/225kh_drw/?hl=en" 
                            className="icon fa-instagram"
                            >
                                <p className = "hidden">Instagram</p>
                            </a>
                        </li>

                        <li>
                            <a 
                            rel="noreferrer" 
                            target = "_blank" 
                            href="https://github.com/choir27" 
                            className="icon fa-github"
                            >
                                <p className = "hidden">Github</p>
                            </a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Portfolio</h3>
                    <a 
                    rel="noreferrer" 
                    target = "_blank" 
                    href = "https://choir.netlify.app/"
                    >
                        My Portfolio
                    </a>  
                </section>

            </section>
        </footer>
    )
};

export default Footer;