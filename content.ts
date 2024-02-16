import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}

// 处理文案同步
document.addEventListener("keydown", (e) => {
  if (e.key !== "x" && e.key !== "X") {
    return
  }

  const rlBackToTopElem = document.querySelector(".rl-backtotop") as HTMLElement

  if (rlBackToTopElem) {
    rlBackToTopElem.click()
  }
})

// 处理回答按钮
document.addEventListener("keydown", (e) => {
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
