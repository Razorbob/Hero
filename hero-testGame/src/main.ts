import './style.css';
import { setupGame } from './game';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id=game>
  </canvas>
`

setupGame(document.querySelector<HTMLCanvasElement>('#game')!);
