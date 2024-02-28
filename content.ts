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
