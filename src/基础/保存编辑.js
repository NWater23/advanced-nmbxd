import $ from 'jquery'
import 正文框 from './正文框'
import { 搜索参数 } from './URL信息'
import { previewEmail, previewTitle } from './预览框'
import { renderContent } from './渲染内文'

/* global GM_deleteValue, GM_getValue, GM_setValue */

export function 清空编辑 () {
  if (document.getElementsByClassName('success')[0].textContent.includes('回复成功')) {
    const 主串路径 = /https?:\/\/[^/]+(\/t\/\d+)/.exec(document.getElementById('href').href)[1]
    GM_deleteValue(主串路径)
  }
}

export function 载入编辑 () {
  正文框.val(GM_getValue(window.location.pathname, 搜索参数.r ? `>>No.${搜索参数.r}\n` : ''))
}

export function 注册自动保存编辑 () {
  $(保存编辑)
  $('form').on('input', 保存编辑)
}

export function 保存编辑 () {
  GM_setValue(window.location.pathname, 正文框.val())
  renderContent(正文框.val())
  previewTitle.text($('form input[name="title"]').val() || '无标题')
  previewEmail.text($('form input[name="name"]').val() || '无名氏')
}
