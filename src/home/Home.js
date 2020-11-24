import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* nav */}
                <div className="container">
                <nav class="navbar ">
                <span class="navbar-brand mb-0 h1">Mobile Store</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 ">
                        <Link class="nav-link" to="login">Login</Link>
                    </li>
                </ul>
            </nav>
                </div>
                {/* corosoul */}
                <div className="container">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/BAUNov/VivoGW/D18857211_BAU_Vivo_Mobile_hero_1242x450._CB415361103_SY250_.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/M51/PriceChange/P38983965_IN_WLME_SamsungGalaxy_M51_With_Bank_Mob._CB415303726_SY250_.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note8/GW/V252104777_WLM_RedmiNote8_mobhero_1242x450._CB415511729_SY250_.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
            </div>
        )
    }
}
