import 正文框 from './正文框'
import { 保存编辑 } from './保存编辑'
import $ from 'jquery'

export function 注册追记引用串号 () {
  $('body').on('click', 'a.h-threads-info-id', e => {
    if (正文框.value.length > 0 && !正文框.value.endsWith('\n')) {
      正文框.value += '\n'
    }
    正文框.value += `>>${e.target.textContent}\n`
    保存编辑()
    e.preventDefault()
  })
}
