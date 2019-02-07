import React, {Component} from 'react';
import {render} from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SigninForm extends Component { 
    render(){
        return(
            <h2>I'm sign in form</h2>
        )
    }
}
class SignupForm extends Component { 
    render(){
        return(
            <div>
                <h2>I'm sign up form</h2>

                <div>
                    <input type="text" placeholder="Your name" />
                </div>
                <div>
                    <input type="email" placeholder="Your email"  />
                </div>
                <div>
                    <input type="password" placeholder="Your password" />
                </div>
                <div>
                    <button type="button">Continue</button>
                </div>
            </div>
        )
    }
}

class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="./signin">Sign in</Link></li>
                        <li><Link to="./signup">Sign up</Link></li>
                    </ul>
                    <div>
                        <Route path="/app/signin" component={SigninForm} />
                        <Route path="/app/signup" component={SignupForm} />
                    </div>
                </div>
            </Router>
        )
    }
}

const container = document.getElementById('root');

render(
    <App />,
    container
)