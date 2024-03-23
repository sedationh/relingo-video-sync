import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}

const addKeyXListener = (callback) => {
  document.addEventListener("keydown", (e) => {
    callback(e)
  })
}

// 处理文案同步
addKeyXListener((e) => {
  if (e.key !== "x" && e.key !== "X") {
    return
  }

  const rlBackToTopElem = document.querySelector(".rl-backtotop") as HTMLElement

  if (rlBackToTopElem) {
    rlBackToTopElem.click()
  }
})

// 处理回答按钮
addKeyXListener((e) => {
  if (e.key !== "x" && e.key !== "X") {
    return
  }

  const hostELem = document.querySelector("#chatgpt-for-google-container")
  const shadowRoot = hostELem?.shadowRoot as any

  const buttons = shadowRoot.querySelectorAll("button")

  let targetButton = null
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === "Ask ChatGPT to Summarize") {
      targetButton = buttons[i]
      break
    }
  }

  targetButton?.click()
})

// 如果点了按钮，再给显示
addKeyXListener((e) => {
  if (e.key !== "x" && e.key !== "X") {
    return
  }

  const llnBottomPanel = document.querySelector(
    ".lln-bottom-panel"
  ) as HTMLElement

  if (!llnBottomPanel) {
    return
  }

  if (llnBottomPanel.style.display === "block") {
    llnBottomPanel.style.display = "none"
    return
  }
  llnBottomPanel.style.display = "block"
})

const style = document.createElement("style")
document.head.appendChild(style)
let lastWidth = 0

setInterval(() => {
  const width =
    document.querySelector("#player-container-inner").clientWidth ||
    document.querySelector("#movie_player").clientWidth

  if (lastWidth === width) {
    return
  }

  lastWidth = width

  style.innerHTML = `
  .lln-bottom-panel {
    position: fixed !important;
    bottom: 0 !important;
    background: #fff;
    padding: 10px 0 !important;
    width: ${width}px !important;
  }

  ytd-watch-flexy[full-bleed-player] #full-bleed-container.ytd-watch-flexy {
    z-index: 1;
  }

  #player.ytd-watch-flexy {
    z-index: 1;
  }
`
}, 2000)
