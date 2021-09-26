import 参数 from './参数'

export function 自动标题 () {
  const 页码 = 参数.page || 1
  const 标题 = 选择标题()
  document.querySelector('title').textContent = `${标题} - page. ${页码} - A岛匿名版`
}

function visit (root, cb) {
  if (cb(root) === '停止') {
    return
  }

  for (const child of root.children) {
    visit(child, cb)
  }
}

function 选择标题 () {
  const title = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-info .h-threads-info-title').textContent.trim()
  if (title !== '无标题') {
    return title
  }

  const mainContent = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content')
  let red = null
  visit(mainContent, el => {
    if (window.getComputedStyle(el).color === 'rgb(255, 0, 0)') {
      red = el
      return '停止'
    }
  })
  if (red !== null) {
    return red.textContent.trim().replace(/^[=\s]+/, '')
  }

  const lines = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content').innerText.split('\n')
  for (let line of lines) {
    if ((line = line.trim()) !== '') {
      return line
    }
  }
}
