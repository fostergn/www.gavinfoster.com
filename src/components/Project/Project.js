import React, { Component } from 'react';
var Flickity = require('flickity');
import holidayGamesImage from '../../images/holiday-games.png';

const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  lazyLoad: true,
  prevNextButtons: false,
  autoPlay: 2000,
  wrapAround: true,
  setGallerySize: false,
};

class Project extends Component {

  constructor(props){
    super(props);
    this.flkty = {};
  }

  componentDidMount(){
      this.flkty = new Flickity( '.carousel__container', flickityOptions);
  }

  componentDidUpdate(){
    console.log('this flickity: ', this.flkty);
    this.flkty.destroy();
    this.flkty = new Flickity( '.carousel__container', flickityOptions);
  }

  render(){

    const { title, description, imgs } = this.props.project;
    const imgsArray = Array.isArray(imgs) ? imgs : [];
    const imgsList = imgsArray.map((img, index) => <div key={index} className="carousel__cell"><img className="carousel__image" data-flickity-lazyload={img} /></div>)

    return (
      <section className="project-single__container">
        <div className="project-single__copy">
          <div className="project-single__description-container">
            <h2 className="project-single__title">{title}</h2>
            <div className="project-single__description" dangerouslySetInnerHTML={{__html:description}}></div>
          </div>
        </div>
        <div className="project-single__image-container">
          <div className="carousel__container">
            {imgsList}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
