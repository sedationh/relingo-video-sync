import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://updraft.cyfrin.io/courses/*"]
}

document   .addEventListener("click", function () {
  const mediaControlBar = document.querySelector(
    "media-control-bar"
  ) as HTMLElement

  if (mediaControlBar) {
    mediaControlBar.style.position = "absolute"
  }
})
