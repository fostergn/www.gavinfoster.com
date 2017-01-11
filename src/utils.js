import projects from './projects';
import { initProject } from './actions/actions';

const initPositions = [];

for(let i = 1; i <= 9; i++){
  let xPerc = `${i}`;
  for(let j = 1; j <= 9; j++){
    if(i <= 3 && j >= 7){continue;}
    if(i == 9 && j == 9){continue;}
    let yPerc = `${j}`;
    initPositions.push([xPerc, yPerc,])
  }
}

export function randomPosition(dots, index){
  let positions = initPositions.slice(0);
  const hoverDot = index;

  // remove position of hovered dot
  if(typeof dots !== 'undefined'){
    const hoverPos = positions.indexOf(dots[hoverDot]);
    positions.splice(hoverPos, 1);
  }

  return projects.map((dot, index) => {
    let randPos = Math.random() * positions.length;
    let coord = positions.splice(randPos, 1)[0];
    if(index === hoverDot){return dots[hoverDot]}
    return coord;
  });
}

// export function initializeProject(store){
//   let { portfolio } = store.getState();
//   console.log('portfolio: ', portfolio.currentProject);
//   if(typeof portfolio.currentProject.name === 'undefined'){
//     return store.dispatch(initProject('lottery'));
//   } else {return}
//
//   // return (nextState, replace) => {
//   //   let { auth } = store.getState();
//   //
//   //   if (!auth || !auth.loggedIn)
//   //     replace({ pathname: loginPath, query: { return_to: nextState.location.pathname } });
//   // };
// }
