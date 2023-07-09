import { helloWorld } from "hero-engine"

export function setupGame(canvas: HTMLCanvasElement) {
  console.log(canvas);
  console.log(helloWorld());
  init();
}

const init = () =>{
  //setup GameEngine

  gameloop();
}

const gameloop = () => {
  


  requestAnimationFrame(gameloop);
}
