import React from 'react';
import { Slide } from 'react-slideshow-image';

import Map from '../assets/map@2x.png';
import { ReactComponent as KT } from '../assets/icon/Kamar Tidur.svg';
import { ReactComponent as KM } from '../assets/icon/Kamar mandi.svg';
import { ReactComponent as LB } from '../assets/icon/Luas Bangunan.svg';
import { ReactComponent as LT } from '../assets/icon/Luas Tanah.svg';


// Start func modal
const Modal = ({ show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
      </section>
    </div>
  );
};

const Modals = ({ shows, children }) => {
  const showHideClassName = shows ? 'modals display-block' : 'modals display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-mains'>
        {children}
      </section>
    </div>
  );
};
// End func modal 

const slideImages = [
  '../assets/map.png',
  '../assets/back.jpg',
  '../assets/map.png',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


class SlideShow extends React.Component {

  // Start state modal 
  state = {
    show: false,
    shows: false,
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  showModals = () => {
    this.setState({ shows: true });
  }

  hideModals = () => {
    this.setState({ shows: false });
  }
  // End state modal

  render() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

              <div class="card">
                <img src='https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/11/1/0/dh2020_front-yard-01-wide-77a1570_h.jpg.rend.hgtvcom.1280.853.suffix/1572612948664.jpeg' alt="Denim Jeans" />
                <div class="flex-container">
                  <div style={{ flexGrow: 2 }}>
                    <button class="button">Dijual </button>
                  </div>
                  <div style={{ flexGrow: 2 }}>
                    <button class="button button2">Nego </button>
                  </div>
                  <div style={{ flexGrow: 8 }}>
                    <p><i class="fa fa-heart fa-lg"></i></p>
                  </div>
                </div>
                <div class="flex-container">
                  <div style={{ flexGrow: 6 }}>
                    <p class='label'>Rp 326JT</p>
                  </div>
                  <div style={{ flexGrow: 6 }}>
                    <p>Cicilan Rp 2,61JT/BLN</p>
                  </div>
                </div>
                <div class="flex-container">
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><KT /> 2 K.Tidur</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><KM /> 2 K.Mandi</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><LB /> 65m2</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><LT /> 65m2</p>
                  </div>
                </div>
                <p><button type='button' class='button button2' onClick={this.showModal}><i className='fa fa-eye'></i> Show Detail</button></p>
              </div>

            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

              <div class="card">
                <img src='https://www.aedirect.com/blog/wp-content/uploads/2019/12/pexels-photo-1396122.jpeg' alt="Denim Jeans" />
                <div class="flex-container">
                  <div style={{ flexGrow: 2 }}>
                    <button class="button">Dijual </button>
                  </div>
                  <div style={{ flexGrow: 2 }}>
                    <button class="button button2">Nego </button>
                  </div>
                  <div style={{ flexGrow: 8 }}>
                    <p><i class="fa fa-heart fa-lg"></i></p>
                  </div>
                </div>
                <div class="flex-container">
                  <div style={{ flexGrow: 6 }}>
                    <p class='label'>Rp 326JT</p>
                  </div>
                  <div style={{ flexGrow: 6 }}>
                    <p>Cicilan Rp 2,61JT/BLN</p>
                  </div>
                </div>
                <div class="flex-container">
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><KT /> 2 K.Tidur</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><KM /> 2 K.Mandi</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><LB /> 65m2</p>
                  </div>
                  <div style={{ flexGrow: 3, marginRight: 10 }}>
                    <p><LT /> 65m2</p>
                  </div>
                </div>
                <p><button type='button' class='button button2' onClick={this.showModal}><i className='fa fa-eye'></i> Show Detail</button></p>
              </div>

            </div>
          </div>
        </Slide>

        {/* Start modal */}
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div class="cards">
            <div class="flex-containers">
              <div style={{ flexGrow: 12 }}>
                <p class='labels'> -- DETAIL -- </p>
              </div>
            </div>
            <img src='https://www.aedirect.com/blog/wp-content/uploads/2019/12/pexels-photo-1396122.jpeg' alt="Denim Jeans" />
            <div class="flex-containers">
              <div style={{ flexGrow: 2 }}>
                <button class="buttons">Dijual </button>
              </div>
              <div style={{ flexGrow: 2 }}>
                <button class="buttons buttons2">Nego </button>
              </div>
              <div style={{ flexGrow: 8 }}>
                <p><i class="fa fa-heart fa-lg"></i></p>
              </div>
            </div>
            <div class="flex-containers">
              <div style={{ flexGrow: 6 }}>
                <p class='labels'>Rp 326JT</p>
              </div>
              <div style={{ flexGrow: 6 }}>
                <p>Cicilan Rp 2,61JT/BLN</p>
              </div>
            </div>
            <div class="flex-containers">
              <div style={{ flexGrow: 12 }}>
                <p class='labels'>Rumah minimalis dijual di Bandung Jawa Barat</p>
              </div>
            </div>
            <div class="flex-containers">
              <div style={{ flexGrow: 12 }}>
                <p>Jl. Sukajadi No.1 Bandung, Jawa Barat</p>
              </div>
            </div>
            <div class="flex-container">
              <div style={{ flexGrow: 3 }}>
                <p><KT /> 2 K.Tidur</p>
              </div>
              <div style={{ flexGrow: 3 }}>
                <p><KM /> 2 K.Mandi</p>
              </div>
              <div style={{ flexGrow: 3 }}>
                <p><LB /> 65m2</p>
              </div>
              <div style={{ flexGrow: 3 }}>
                <p><LT /> 65m2</p>
              </div>
            </div>
            <div class="flex-containers">
              <div style={{ flexGrow: 6 }}>
                <button type='buttons' class='buttons buttons2' onClick={this.showModals}><i className='fa fa-eye'></i> Show Map</button>
              </div>
              <div style={{ flexGrow: 6 }}>
                <button type='buttons' class='buttons buttons3' onClick={this.hideModal}><i className='fa fa-times'></i> Close </button>
              </div>
            </div>
          </div>

          <Modals shows={this.state.shows} handleClose={this.hideModals} >
            <div class="cards">
              <div class="flex-containers">
                <div style={{ flexGrow: 12 }}>
                  <p class='labels bg'> -- MAP -- </p>
                </div>
              </div>
              <img src={Map} style={{ width: '100%' }} alt="Denim Jeans" />
              <div class="flex-containers">
                <div style={{ flexGrow: 12 }}>
                  <p class='labels'>Jl. Sukajadi No.1 Bandung, Jawa Barat</p>
                </div>
              </div>
              <div class="flex-containers">
                <div style={{ flexGrow: 12 }}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla beatae sunt officia dolor dicta fugiat, ipsam quos eos similique earum in dolores sit iste impedit quasi, modi alias sed!</p>
                </div>
              </div>
              <div class="flex-containers">
                <div style={{ flexGrow: 12 }}>
                  <button type='buttons' class='buttons buttons3' onClick={this.hideModals}><i className='fa fa-angle-double-left'></i> Back </button>
                </div>
              </div>
            </div>
          </Modals>

        </Modal>


        {/* End modal */}

      </div>
    )
  }
}

export default SlideShow

