export * from './node_modules/asdom/assembly/glue'

import {HTMLElement} from './node_modules/asdom/assembly/elements/index'
import {document} from './node_modules/asdom/assembly/index'

let counter = 0;
let counterText = "score: "
let lastDiv : HTMLElement | null;
let span: HTMLElement | null

function divClick(): void {
  counter += 1;
  let c = document.querySelector("#counter");
  c!.innerHTML =  counter.toString();
  hideDiv()
}

export function hideDiv() : void {
  let style = "visibility: hidden;";
  lastDiv!.setAttribute("style", style);
}

export function createCounter() : void {
  const el = document.createElement("h1")
  document.body!.appendChild(el)
  el.innerHTML = /*html*/ `
  <span style="font-weight: normal; text-align: center;">
    <em> <strong>Click me</strong></em>
  </span>`
  el.setAttribute("style", "text-align: center;")
  const txt = document.createElement("span");
  txt.innerHTML = counterText;

  const p = document.createElement("p")
  p.appendChild(txt)
  document.body!.appendChild(p)

  let sp = document.createElement("span");
  sp.setAttribute("id", "counter");
  sp.innerHTML = counter.toString()
  p.appendChild(sp)
  p.setAttribute("style", "text-align: center;")
  span = sp;
}



export function moveDiv() : void {
  let x = Math.floor(Math.random() * 90).toString();
  let y = Math.floor(Math.random() * 90).toString();
  let style = "visibility: visible; background: red; position: absolute; top: " + y + "%; left: " + x + "%; width: 20px; height: 20px; ";
  lastDiv!.setAttribute("style", style);
}

export function createDiv() : void {
  const div = document.createElement("div");
  document.body!.appendChild(div)
  div.addEventListener("click", divClick)
  lastDiv = div;
  moveDiv()
}

