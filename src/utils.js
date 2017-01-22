import projects from './projects';
import { initProject } from './actions/actions';

const initPositions = [];

if(window.outerWidth < 700){
  mobilePositions(); 
} else {desktopPositions()}

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

function desktopPositions(){
  for(let i = 1; i <= 9; i++){
    let xPerc = `${i}`;
    for(let j = 1; j <= 9; j++){
      if(i <= 3 && j >= 7){continue;}
      if(i == 9 && j == 9){continue;}
      let yPerc = `${j}`;
      initPositions.push([xPerc, yPerc,])
    }
  }
}

function mobilePositions(){
  for(let i = 2; i <= 8; i++){
    let xPerc = `${i}`;
    for(let j = 1; j <= 8; j++){
      if(i >= 7 && j >= 7){continue;}
      let yPerc = `${j}`;
      initPositions.push([xPerc, yPerc,])
    }
  }
}
