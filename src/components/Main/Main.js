import React from 'react';
import { browserHistory } from 'react-router';
import Chat from '../Chat/Chat';
import Dot from '../Dot/DotContainer';
import Preview from '../Preview/PreviewContainer';
import Project from '../Project/ProjectContainer';
import projects from '../../projects';

const Main = ({ children, location, route, params }) =>  {
  let mainClass = '';
  let isMainActive = true;
  let dotList = projects.map((project, index) => <Dot index={index} name={project.name} key={index} />)

  if(route.hasOwnProperty('childRoutes')){
    if(route.childRoutes[0].path === 'project/:id'){
      mainClass = 'main--inactive';
      isMainActive = false;
    }
  }

  const mainClick = (e) => {
    if(!isMainActive){
      browserHistory.push('/');
    }
  }

  return (
    <div>
      <main onClick={(e) => mainClick(e)} className={mainClass}>
        {dotList}
        <Preview />
        <div className='main__back-button'>home</div>
        <Chat />
      </main>
      <Project route={route} location={location} params={params} />
    </div>
  );
}

export default Main;
