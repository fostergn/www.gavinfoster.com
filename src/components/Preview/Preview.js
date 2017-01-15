import React from 'react';
import classNames from 'classnames';
import './Drawing';

const Preview = ({ project, hovering, isDrawing, }) =>  {

  console.log('preview project : ', project);

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

  return (
    <div className="project-preview__container">
      <div className={previewTitleClasses}>{project.name}</div>
      <section className={previewImageContainerClasses}>
        <div className="project-preview__image-container-child">
          <img className={previewImageClasses} src={project.cover} />
        </div>
        <canvas id="drawing-surface" width="300" height="500"></canvas>*/}
        <div className="options__container">
          <div className="options__color options__color--blue" id="options__color--blue"></div>
          <div className="options__color options__color--black" id="options__color--black"></div>
          <div className="options__size options__size--five" id="options__size--five"></div>
          <div className="options__size options__size--ten" id="options__size--ten"></div>
          <div className="options__size options__size--twenty" id="options__size--twenty"></div>
        </div>
        <canvas id="canvas" width="300" height="500"></canvas>
      </section>
    </div>
  );
}

export default Preview;
