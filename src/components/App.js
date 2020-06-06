import React, { Component } from 'react'

import Frontend from '../assets/FRONTend.png'
import Find from '../assets/find.png'
import Flex from '../assets/flex.png'
import Cost from '../assets/cost.png'

import SlideShow from './SlideShow'
import BackTop from './BackTop'

export class App extends Component {
  render() {
    return (
      <>

        <header>
          <nav>
            <figure>
              <img src={Frontend} alt="" />
            </figure>
            <ul>
              <li><a href="#"><i className='fa fa-home'></i> Home</a></li>
              <li><a href="#"><i className='fa fa-info-circle'></i> About</a></li>
              <li><a href="#"><i className='fa fa-phone'></i> Contact</a></li>
            </ul>
          </nav>
          <div className="jumbotron">
            <h1>** Real Estate **</h1> 
            <p>Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.</p>
          </div>
        </header>

      

        <main>
          <div id="content">
            <h1>Start Your Journey</h1>
            <p><b>Lorem ipsum dolor,</b> sit amet consectetur adipisicing elit. Porro cumque voluptate impedit minima amet nam, ab reiciendis, numquam corporis architecto repellendus, error praesentium quo officiis. Rem voluptatum inventore laborum dolorem.</p>
            <p><b>Lorem ipsum dolor,</b> sit amet consectetur adipisicing elit. Porro cumque voluptate impedit minima amet nam, ab reiciendis, numquam corporis architecto repellendus, error praesentium quo officiis. Rem voluptatum inventore laborum dolorem.</p>
            <div class="row">
              <div class="column side">
                <h2>Easy Find </h2>
                <img src={Find} alt=""/>
              </div>

              <div class="column middle">
                <h2>Flexibility</h2>
                <img src={Flex} alt="" />
              </div>

              <div class="column side">
                <h2>Low Cost</h2>
                <img src={Cost} alt="" />
              </div>
            </div>
          </div>

          <aside>
            <SlideShow />
          </aside>
        </main>

        <footer>
          <p>Start Your Journey &#169; 2020. Real Estate</p>
        </footer>
      
        <BackTop />
        
      </>
    )
  }
}

export default App
