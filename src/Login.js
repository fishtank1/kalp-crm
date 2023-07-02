import { Component } from "react";
import './Login_Signup/Login.css';

class Login extends Component {
    render() {
        return (
            <div id="main-box">
                <div id="intro-box">
                    <h2>Sign In With Simple Login</h2>
                    <p>Enter your email & password to login</p>
                </div>
                <form>
                    <label>
                        Email Address <input type="email" placeholder="Anurag.Gupta@Kalp.com" name="email" />
                    </label>

                    <label>
                        Password <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" name="password" />
                        <div id="show-password">show</div>
                    </label>

                    <div id="rem-pass">
                        <label>
                            <input type="checkbox" name="remember-pass" /> 
                            <div>Remember password</div>
                        </label>
                            
                        <div id="forgot-pass">
                            Forgot password?
                        </div>
                    </div>

                    <div id="sign-in-btn">
                        <button name="sign-in" value="submitted_value-signin">Sign In</button>
                        
                    </div>

                    <div id="sing-up-section">
                        <div id="sing-up-section1">
                            <div>
                                <h3>Or Sign up with</h3>
                                <hr />
                            </div>
                        </div>
                        
                        <div id="socials-btn">
                            <button name="sign-up-linkedin" value="linkedin"><i class="fa-brands fa-linkedin-in"></i>Linkedin</button>
                            <button name="sign-up-twitter" value="twitter"><i class="fa-brands fa-twitter"></i>twitter</button>
                            <button name="sign-up-facebook" value="facebook"><i class="fa-brands fa-facebook-f"></i>facebook</button>
                        </div>
                    </div>

                    <div id="create-acc">
                        <div>Don't have account?</div>
                        <div id="create-acc-btn">Create Account</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;