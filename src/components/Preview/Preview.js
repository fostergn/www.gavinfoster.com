import React from 'react';
import classNames from 'classnames';

const Preview = ({ project, hovering }) =>  {

  const previewTitleClasses = classNames({
    'project-preview__title': true,
    'project-preview__title--hidden': !hovering
  });

  return (
    <div className="project-preview__container">
      <div className={previewTitleClasses}>{project.name}</div>
      <section className="project-preview__image-container" style={{backgroundImage: `url('${project.cover}')`}}>
      </section>
    </div>
  );
}

export default Preview;
