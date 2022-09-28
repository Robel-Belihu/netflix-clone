import React, { useState } from "react"
import Footer from "../Footer";
import "./LoginPage.css";
import SignUpPage from "./SignUpPage";


function LoginPage() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="LoginPage">
            <div className="LoginPage__background">
                <img className="LoginPage__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="netflix-logo" />
            </div>
            <button
                onClick={
                    () => setSignIn(true)
                }
                className="loginPage__btn"
            >
                Sign in
            </button>
            <div className='loginPage__gradient' />

            <div className="loginPage__body">
                {signIn ? (
                    < SignUpPage />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="loginPage__card">
                            <input style={{ fontSize: "18px" }} sty className="loginPage__input" placeholder="Email address" type="email" />
                            <button
                                type="submit"
                                className="LoginPage__btn"
                                onClick={
                                    () => setSignIn(true)
                                }
                            >
                                Get Started
                            </button>
                        </form>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage