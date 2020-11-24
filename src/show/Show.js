import React, { Component } from 'react'
import './Show.css'
import { Link} from 'react-router-dom';
export default class Show extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }
 
    displayProduct =()=>{
        this.setState({
            name:<Child />
        })
    } 
    displayProduct1 =()=>{
        this.setState({
            name:<Child1 />
        })
    } 
    displayProduct2 =()=>{
        this.setState({
            name:<Child2 />
        })
    } 
    displayProduct3 =()=>{
        this.setState({
            name:<Child3 />
        })
    } 
   
   
           render() {
        return (
            <div>    
                {/* nav */}
                <div className="container">
                    
                <nav class="navbar ">
                <span class="navbar-brand mb-0 h1">Show Mobiles</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 ">
                        <Link className="nav-link" to="home">Logout</Link>
                    </li>
                </ul>
            </nav> 

                </div>
                {/* showcontent */}
  <div className="container" >
   <div>{this.state.name} </div>
  </div>
                <div className="container">
               
           {/* card */}
           <div className="card-deck">
  <div className="card" id="c1">
    <img className="showimg" src="https://m.media-amazon.com/images/I/71aqNzEqj0L._AC_UY218_.jpg" alt="" onClick={this.displayProduct}/>
    <div className="card-body">
        <h5>OnePlus Nord 5G</h5>
    </div>
  </div>
  <div className="card" id="c1">
  <img className="showimg" src="https://m.media-amazon.com/images/I/81T7lVQGdxL._AC_UY218_.jpg" alt="" onClick={this.displayProduct1}/>
    <div className="card-body">
        <h5>Xiaomi Mi A3</h5>
    </div>
  </div>
  <div className="card" id="c1">
  <img className="showimg" src="https://m.media-amazon.com/images/I/61CnyJ-IbML._AC_UY218_.jpg" alt="" onClick={this.displayProduct2}/>
    <div className="card-body">
        <h5>Oppo A31</h5>
    </div>
  </div>
  <div className="card" id="c1">
  <img className="showimg" src="https://m.media-amazon.com/images/I/613-W6czeJL._AC_UY218_.jpg" alt="" onClick={this.displayProduct3}/>
    <div className="card-body">
        <h5>Vivo V20</h5>
    </div>
  </div>
</div>


            </div>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/71aqNzEqj0L._AC_UY218_.jpg" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">OnePlus Nord 5G </h4>
                 <p className="card-text">
                     Color: Blue Marble <br/>
                     RAM: 8GB <br/>
                     Storage:128Gb<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child1 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/81T7lVQGdxL._AC_UY218_.jpg" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Xiaomi Mi A3</h4>
                 <p className="card-text">
                     Color: Grey <br/>
                     RAM: 4GB <br/>
                     Storage:64GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child2 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/61CnyJ-IbML._AC_UY218_.jpg" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Oppo A31</h4>
                 <p className="card-text">
                     Color:Fantasy White <br/>
                     RAM: 6GB <br/>
                     Storage:128GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child3 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/613-W6czeJL._AC_UY218_.jpg" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Vivo V20</h4>
                 <p className="card-text">
                     Color: Sunset Melody <br/>
                     RAM: 8GB <br/>
                     Storage:128GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}