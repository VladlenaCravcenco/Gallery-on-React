import React, { Component } from 'react';
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
export default class SignUp extends Component {

    render() {
        return (
            <>
            <div className="login-place">
        <div className="log-container">
            <div className="left-log">
                <div className="form-to-fill">
                    <h1>Log in</h1>
                    <form method="post">
                      <div className="txt-field">
                        <input type="text" required/>
                        <label>Nume de utilizator sau email</label>
                    </div>
                    <div className="txt-field">
                        <input type="password" required/>
                        <label>Parolă</label>
                    </div>
                    <div className="pass">Ați pierdut parola?</div>
                    <a href='/myroom' ><input type="submit" value="conectare"/></a>
                    
                    
                    <div className="signup-link">
                        Don't have an account? <a href="signup">Creează un cont nou</a>
                    </div>  

                    <div className="variante">
            <div className="cuApple"> <img src={apple} alt=""/> Continuă cu Apple</div>
            <div className="google"> <img src={google} alt=""/> Continuă cu Google</div>
            <div className="facebook"> <img src={facebook} alt=""/> Continuă cu Facebook</div>
        </div>

                    </form>
                    
                    
                </div>
            </div>
            <div className="right-log">

            </div>
        </div>

    </div>
            </>
        );
    }
};