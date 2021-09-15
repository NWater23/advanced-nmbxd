import 正文框 from './正文框'
import 参数 from './参数'

export function 清空编辑 () {
  if (document.getElementsByClassName('success')[0].textContent.includes('回复成功')) {
    const 主串路径 = /https?:\/\/[^/]+(\/t\/\d+)/.exec(document.getElementById('href').href)[1]
    GM_deleteValue(主串路径)
  }
}

export function 载入编辑 () {
  正文框.value = GM_getValue(window.location.pathname, 参数.r ? `>>No.${参数.r}\n` : '')
}

export function 注册自动保存编辑 () {
  正文框.addEventListener('change', 保存编辑)
}

export function 保存编辑 () {
  GM_setValue(window.location.pathname, 正文框.value)
}
