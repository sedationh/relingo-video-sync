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

const handleEleVisibilityChange = (e) => {
  if (e.key !== "x" && e.key !== "X") {
    return
  }

  const llnBottomPanel = document.querySelector(
    ".lln-bottom-panel"
  ) as HTMLElement

  // above-the-fold
  const aboveTheFold = document.querySelector("#above-the-fold") as HTMLElement

  if (!llnBottomPanel) {
    return
  }

  if (llnBottomPanel.style.display === "block") {
    aboveTheFold.style.display = "block"
    llnBottomPanel.style.display = "none"
    return
  }
  aboveTheFold.style.display = "none"
  llnBottomPanel.style.display = "block"
}

// 如果点了按钮，再给显示
addKeyXListener(handleEleVisibilityChange)

setTimeout(() => {
  handleEleVisibilityChange({ key: "x" })
}, 2000)

const style = document.createElement("style")
document.head.appendChild(style)
let lastWidth = 0

setInterval(() => {
  const width =
    document.querySelector("#player-container-inner").clientWidth ||
    document.querySelector("#movie_player").clientWidth
  const playerElement = document.querySelector("video")
  const playerBottomPosition = playerElement.getBoundingClientRect().bottom
  const distanceFromBottom = 20
  const topValue = playerBottomPosition + distanceFromBottom

  const contents = document.querySelector("#below")

  if (lastWidth === width && contents) {
    return
  }

  lastWidth = width

  style.innerHTML = `
    .lln-bottom-panel {
      position: fixed !important;
      bottom: unset !important;
      top: ${topValue || 20}px !important;
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


    #below {
      top: ${100}px !important;
    }
  `
}, 2000)
