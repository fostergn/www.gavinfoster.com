import React from 'react';

const Project = ({ project, params }) =>  {

  let id = typeof params !== 'undefined' ? params.id : 12;

  console.log('params: ', params);

  return (
    <section className="project-single__container">
      {project}
    </section>
  );
}

export default Project;
