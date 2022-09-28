import React, { useRef } from "react";
import "./SignUpPage.css";
import { register, signIn } from "../firebase";

function SignUpPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    async function signInHandler(e) {
        e.preventDefault();

        await signIn(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(`Please enter your email and pasword to Login. If you don't have an account enter your email and new pasword and click on "Sign Up now".`);
            })
    };

    async function handleRegister(e) {
        e.preventDefault();

        await register(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(`Please enter your email and a new password to register and click on "Sign Up now".`);
            })
    };

    return (
        <div className="signUpPage">
            <form>
                <h1>Sign In</h1>
                <input style={{ fontSize: "18px" }} ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button className="signUpPage__btn" type="submit" onClick={signInHandler}>
                    Sign In
                </button>
                <h4>
                    <span className="signUp__gray">New to Netflix? </span>
                    <span className="signUp__light" onClick={handleRegister}> Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpPage