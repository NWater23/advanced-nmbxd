import $ from 'jquery'
import { previewContent } from './预览框'
const refExp = /^([>＞]+.*)$/g
const hideExp = /\[h\](.*)\[\/h\]/g

export function renderContent (raw) {
  if (raw.trim() === '') {
    console.log('No content')
    return
  }
  previewContent.text('')
  for (let i of raw.split('\n')) {
    i = i.replace(/ +/g, ' ')
    let e
    if (refExp.test(i)) {
      e = $('<font color="#789922"></font>').text(i)
    } else if (hideExp.test(i)) {
      e = $('<span class="h-hidden-text"></span>').text(i)
    } else {
      e = $('<span></span>').text(i)
    }
    previewContent.append(e)
    previewContent.append('<br>')
  }
}
