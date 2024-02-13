import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"],
}

// 监听键盘事件 s
document.addEventListener("keydown", (e) => {
    if (e.key !== "x") { 
        return
    }
    
    const rlBackToTopElem = document.querySelector(".rl-backtotop") as HTMLElement

    if (rlBackToTopElem) {
        rlBackToTopElem.click()
    }
})