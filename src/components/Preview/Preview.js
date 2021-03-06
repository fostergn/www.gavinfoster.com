import React from 'react';
import classNames from 'classnames';
import './Drawing';

const Preview = ({ project, hovering, isDrawing, sendMessage }) =>  {

  const previewTitleClasses = classNames({
    'project-preview__title': true,
    'project-preview__title--hidden': !hovering
  });

  const previewImageClasses = classNames({
    'project-preview__image': true,
    'project-preview__image--hidden': !hovering,
  });

  const previewImageContainerClasses = classNames({
    'project-preview__image-container': true,
    'project-preview__image-container--drawing': isDrawing,
  });

  function handleImageFile() {
    var file    = document.getElementById('options__file').files[0];
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      var base_image = new Image();
      base_image.src = reader.result;
      base_image.onload = function(){
        var width = base_image.width;
        var height = base_image.height;
        var ratio = calculateAspectRatioFit(width, height, canvas.width, canvas.height);
        var scaledWidth = ratio * width;
        var scaledHeight = ratio * height;
        ctx.drawImage(base_image, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
        ctx.beginPath();
      }
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return ratio;
   }

  function submitImage(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var dataURL = canvas.toDataURL();
    var optionBlack = document.getElementById('options__color--black');
    var optionTen = document.getElementById('options__size--ten');

    sendMessage(dataURL);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = "black"; // Green path
    removeClassFromElements('.options__color--active');
    removeClassFromElements('.options__size--active');
    optionTen.classList.add('options__size--active');
    optionBlack.classList.add('options__color--active');
  }

  function removeClassFromElements(selector){
    var className = selector.startsWith('.') === true ? selector.substr(1) : selector;
    var active = [].slice.call(document.querySelectorAll(selector));
    active.forEach(function(el){
      el.classList.remove(className);
    });
  }


  return (
    <div className="project-preview__container">
      <svg className="project-preview__polygon-container" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon className="project-preview__polygon" points="10,5, 90,5, 90,70, 70,70 70,95 10,95" />
      </svg>
      <div className={previewTitleClasses}>{project.name}</div>
      <section className={previewImageContainerClasses}>
        <div className="project-preview__image-container-child">
          <img className={previewImageClasses} src={hovering ? project.cover : ''} />
        </div>
        <div className="options__container">
          <div className="options__color options__color--white" id="options__color--white"></div>
          <div className="options__color options__color--yellow" id="options__color--yellow"></div>
          <div className="options__color options__color--orange" id="options__color--orange"></div>
          <div className="options__color options__color--red" id="options__color--red"></div>
          <div className="options__color options__color--green" id="options__color--green"></div>
          <div className="options__color options__color--blue" id="options__color--blue"></div>
          <div className="options__color options__color--purple" id="options__color--purple"></div>
          <div className="options__color options__color--black" id="options__color--black"></div>
          <div className="options__color options__color--gradient" id="options__color--gradient"></div>
          <div className="options__size options__size--five" id="options__size--five"></div>
          <div className="options__size options__size--ten" id="options__size--ten"></div>
          <div className="options__size options__size--twenty" id="options__size--twenty"></div>
          <div className="options__file-container">
            <div className="options__attachment"><i className="fa fa-paperclip" aria-hidden="true"></i></div>
            <input className="options__file" id="options__file" onChange={() => handleImageFile()} type="file"></input>
          </div>
          <div className="options__send" onClick={() => submitImage()}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
          <div className="options__clear" id="options__clear">clear</div>
        </div>
        <canvas id="canvas" width="300" height="500"></canvas>
      </section>
    </div>
  );
}

export default Preview;
