import React from 'react';
import classNames from 'classnames';

const Preview = ({ project, hovering, location, route }) =>  {

  console.log('preview project : ', project);

  const previewTitleClasses = classNames({
    'project-preview__title': true,
    'project-preview__title--hidden': !hovering
  });

  const previewImageClasses = classNames({
    'project-preview__image': true,
    'project-preview__image--hidden': !hovering
  });

  return (
    <div className="project-preview__container">
      <div className={previewTitleClasses}>{project.name}</div>
      <section className="project-preview__image-container">
        <div className="project-preview__image-container-child">
          <img className={previewImageClasses} src={project.cover} />
        </div>
    </section>
    </div>
  );
}

export default Preview;
