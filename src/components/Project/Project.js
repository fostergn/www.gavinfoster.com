import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class Project extends Component {

  constructor(props){
    super(props);

    // check if intial load on project single page
    if(typeof props.params.id !== 'undefined' && typeof props.project.name === 'undefined'){
      props.initProject(props.params.id);
    }
  }

  render(){

    const { title, description, imgs, backgroundColor } = this.props.project;
    const imgsArray = Array.isArray(imgs) ? imgs : [];
    const imgsList = imgsArray.map((img, index) => <div key={index} className="project-images__item"><img className="project-images__image" src={img} /></div>)

    return (
      <section className="project-single__container" style={{backgroundColor: backgroundColor}}>
        <div className="project-single__copy">
          <div className="project-single__description-container">
            <h2 className="project-single__title">{title}</h2>
            <div className="project-single__description" dangerouslySetInnerHTML={{__html:description}}></div>
          </div>
        </div>
        <div className="project-single__image-container">
          <div className="project-images__container">
            {imgsList}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
