import React, { Component } from 'react';
import classNames from 'classnames';
import {browserHistory} from 'react-router';

class Project extends Component {

  constructor(props){
    super(props);

    // check if intial load on project single page
    if(typeof props.params.id !== 'undefined' && typeof props.project.name === 'undefined'){
      props.initProject(props.params.id);
    }
  }

  componentWillUpdate(){
    this.isMobile = false;
    const breakpoint = 700;
    let windowWidth = window.innerWidth;
    this.isMobile = windowWidth < breakpoint;
    var doc = window.document,
    context = doc.getElementsByClassName('project-images__container')[0],
    clones = context.getElementsByClassName('project-images__item--clone'),
    disableScroll = false,
    scrollHeight = 0,
    scrollPos = 0,
    clonesHeight = 0,
    i = 0;
    setScrollPos(1);

  function getScrollPos() {
    return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
  }

  function setScrollPos(pos) {
    context.scrollTop = pos;
  }

  function getClonesHeight() {
    clonesHeight = 0;
    i = 0;

    for (i; i < clones.length; i += 1) {
      clonesHeight = clonesHeight + clones[i].offsetHeight;
    }

    return clonesHeight;
  }

  function reCalc() {
    scrollPos = getScrollPos();
    scrollHeight = context.scrollHeight;
    clonesHeight = getClonesHeight();

    if (scrollPos <= 0) {
      setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
    }
  }

  // Calculate variables
  window.requestAnimationFrame(reCalc);

  function scrollUpdate() {
    if (!disableScroll) {
      scrollPos = getScrollPos();
      if (clonesHeight + scrollPos >= scrollHeight) {
        setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true;
      } else if (scrollPos <= 0) {
        // Scroll to the bottom when you reach the top
        setScrollPos(scrollHeight - clonesHeight - 1);
        disableScroll = true;
        }
      }

      if (disableScroll) {
        // Disable scroll-jumping for a short time to avoid flickering
        window.setTimeout(function () {
          disableScroll = false;
        }, 40);
      }
    }

    context.addEventListener('scroll', function () {
      window.requestAnimationFrame(scrollUpdate);
    }, false);

    window.addEventListener('resize', function () {
      window.requestAnimationFrame(reCalc);
    }, false);
  }

  render(){
    const { location } = this.props;
    const { title, description, imgs, backgroundColor, backgroundColorBorder } = this.props.project;

    // assuming atleast two images, copy for infinite loop
    // cloning two images for looping scroll
    const imgsArray = Array.isArray(imgs) ? [...imgs, imgs[0], imgs[1]] : [];
    let imgsList = imgsArray.map((img, index) => {
      let imgClass = classNames({
        'project-images__item': true,
        'project-images__item--clone': imgsArray.length - index <= 2,
      });
      return (
        <div key={index} className={imgClass}>
          <img className="project-images__image" srcSet={img} />
         </div>
      )
    });

    return (
      <section className="project-single__container">
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
