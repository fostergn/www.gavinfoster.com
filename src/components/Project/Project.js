import React, { Component } from 'react';
var Flickity = require('flickity');
import holidayGamesImage from '../../images/holiday-games.png';

// class Project = ({ project, params }) =>  {
class Project extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
      var flkty = new Flickity( '.carousel__container', {
        cellAlign: 'left',
        contain: true,
        lazyLoad: true,
        prevNextButtons: false,
        autoPlay: 2000,
        wrapAround: true,
        setGallerySize: false,
      });
  }

  render(){
    return (
      <section className="project-single__container">
        <div className="project-single__copy">
          <h2 className="project-single__title">Virginia Lottery Holiday Games</h2>
            {/*<h2 className="project-single__title">{this.props.project}</h2>*/}
          <div className="project-single__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="project-single__image-container">
          <div className="carousel__container">
            <div className="carousel__cell"><img className="carousel__image" data-flickity-lazyload={holidayGamesImage} /></div>
            <div className="carousel__cell"><img className="carousel__image" data-flickity-lazyload={holidayGamesImage}  /></div>
            <div className="carousel__cell"><img className="carousel__image" data-flickity-lazyload={holidayGamesImage}  /></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
