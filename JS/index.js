import { calculate } from "./calculate.js"
import { copyClipboard } from "./copyToClipBoard.js"
import { handleButtonPress, handleClearButton, handleType } from "./keyHandels.js"
import { themeSwitcher } from "./themeSwitcher.js"


document.querySelectorAll('.charKey').forEach(function (charkeyBtn){
    charkeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)
document.getElementById('input').addEventListener('keydown', handleType)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)