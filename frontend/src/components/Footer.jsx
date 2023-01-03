const Footer = () => {
  return (
    <footer id="footer">
    <section>
        <form method="post" action="#">
            <div className="fields">
                <div className="field">
                    <label>Name</label>
                    <input placeholder = 'Put your name here' type="text" name="name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email"/>
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea placeholder = 'Put your message here' name="message" rows="3"></textarea>
                </div>
            </div>
                <input className = 'button' type="submit" value="Send Message" />
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
                <li><a rel="noreferrer" target = '_blank' href="https://twitter.com/choir241" className="icon fa-twitter"><p className = 'hidden'>Twitter</p></a></li>
                <li><a rel="noreferrer" target = '_blank' href="https://www.linkedin.com/in/richard-choir/" className="icon fa-linkedin"><p className = 'hidden'>LinkedIn</p></a></li>
                <li><a rel="noreferrer" target = '_blank' href="https://www.instagram.com/225kh_drw/?hl=en" className="icon fa-instagram"><p className = 'hidden'>Instagram</p></a></li>
                <li><a rel="noreferrer" target = '_blank' href="https://github.com/choir27" className="icon fa-github"><p className = 'hidden'>Github</p></a></li>
            </ul>
        </section>
        <section>
            <h3>Portfolio</h3>
            <p><a rel="noreferrer" target = '_blank' href = 'https://choir.netlify.app/'>My Portfolio</a></p>
        </section>
    </section>
</footer>

  )
}

export default Footer