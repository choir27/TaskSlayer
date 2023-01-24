import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header"
import axios from "axios";
import Button from "../components/Button"

const NAME_REGEX = /^[a-zA-Z]*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
const REGISTER_URL = `http://localhost:8000/register`;

const Register = ( {onAdd} ) => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [name, setName] = useState('');
    const [validUserName, setValidUserName] = useState(false)

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setValidUserName(NAME_REGEX.test(name))
    }, [name])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(()=>{
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);

        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd, email, name }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this

            onAdd(user, name, email, pwd)
            
            setName('')
            setEmail('')
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div>
          <Header/>
          <div id = 'main'>
          <article className = 'post' id = 'account'>
            {success ? (
                <section className = "major column flex">
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className = 'flex justifyContent'>Register Account</h1>
                    <form className = 'flex column justifyContent alignItems' onSubmit = {handleSubmit} >
                      <div className="fields">
               
                        <div className="field">
                            <label htmlFor="name">
                                Name:
                                {name && validUserName ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            </label>
                            <input
                              type="text"
                              id="name"
                              autoComplete="off"
                              onChange={(e)=>setName(e.target.value)}
                              value={name}
                              required
                              name="name"
                            />
                            <p>
                                Must not contain any symbols or numbers
                            </p>
                        </div>


                        <div className="field">
                            <label htmlFor="email">
                                Email:
                                {validEmail && email? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            </label>
                            <input
                              type="text"
                              id="email"
                              onChange={(e)=>setEmail(e.target.value)}
                              value={email}
                              required
                              name="email"
                            />
                            <p>
                                Letters, numbers, and the following symbols are allowed before the <span aria-label="at symbol">@</span> symbol: <span aria-label="plus sign">!</span> <span aria-label="underscore">_</span> <span aria-label="period">.</span> <span aria-label="hash">-</span>
                                Must end with .org, .com or .net
                            </p>
                        </div>


                        <div className ='field'>
                            <label htmlFor="username">
                                Username:
                                {validName && user? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                name ="userName"
                            />
                            <p>
                                4 to 24 characters.
                                Must begin with a letter.
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </div>

                        <div className = 'field'>
                            <label htmlFor="password">
                                Password:
                                {validPwd && pwd ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            </label>
                            <input
                                type="password"
                                id="password"
                                name ="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                           <p >
                                8 to 24 characters.
                                Must include uppercase and lowercase letters, a number and a special character.
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                        </div>

                        <div className = 'field'>
                            <label htmlFor="confirm_pwd">
                                Confirm Password:
                                {validMatch && matchPwd? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                            />
                            <p>
                                Must match the first password input field.
                            </p>
                          </div>

                        </div>

                            <button className = 'button large' type = 'submit' disabled={!validName || !validPwd || !validMatch || !validEmail || !validUserName ? true : false}>Sign Up</button>
            
                    </form>


            <ul className = 'special flex column'>
                    <li className = 'flex justifyContent'>
                Already registered?
              </li>
              <li className = 'flex justifyContent'>
              <Button 
                domain = '/login'
                size = 'large'
                cname = 'button'
                text = 'Login Here'
              />
              </li>
            </ul>
            </section>

            )}
            </article>
            </div>
        </div>
    )
}

export default Register