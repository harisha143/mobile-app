import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import './Login.css'



export default class Login extends Component {
    constructor(){
        super();
        this.state={
            val:""
        }
    }

    render() {   
        return (
            <div>   
                 {/*nav  */}
                  <div className="container">
                  <div className="container">
                <nav className="navbar ">
                <span className="navbar-brand mb-0 h1">Mobile Store</span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item1 ">
                        <Link className="nav-link" to="home">Home</Link>
                    </li>
                </ul>
            </nav>
                </div>
                </div>
            <div className="container">
            <div className="form">
<section id="content">
<form className="login"  >
<h1 className="logHead">Login</h1>
<div>
<input type="text" placeholder="Username"  id="username" autoComplete="off"  onChange={this.change}></input>
</div>
<div>
<input type="password" placeholder="Password"  maxLength="8" id="password" ></input>
</div>     
            <Link to="/show"><input type="submit" value="Login" className="sub" ></input></Link>
           </form>
           </section>
            </div>
            </div>
            </div>
        
        )
    }
}
