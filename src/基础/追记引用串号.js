import 正文框 from './正文框'
import { 保存编辑 } from './保存编辑'
import $ from 'jquery'

export function 注册追记引用串号 () {
  $('body').on('click', 'a.h-threads-info-id', e => {
    const start = 正文框.prop('selectionStart')
    const end = 正文框.prop('selectionEnd')
    const len = end - start
    const str = 正文框.val()
    const left = str.substring(0, start)
    const right = str.substring(end)
    const ref = `>>${e.target.textContent.trim()}`
    正文框.val(
      start === 0
        ? `${ref}\n${right}`
        : end === str.length
          ? `${left}\n${ref}\n`
          : len > 0
            ? `${left} ${ref} ${right}`
            : `${left}\n${ref}`
    )
    正文框.trigger('input', '')
    保存编辑()
    e.preventDefault()
  })
}
