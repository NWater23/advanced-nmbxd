import 参数 from './参数'

export function 自动标题 () {
  const page = 参数.page || 1
  const title = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-info .h-threads-info-title').textContent.trim()
  if (title !== '无标题') {
    document.querySelector('title').textContent = `${title} - page. ${page} - A岛匿名版`
    return
  }
  const lines = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content').textContent.split('\n')
  for (let line of lines) {
    if ((line = line.trim()) !== '') {
      document.querySelector('title').textContent = `${line} - page. ${page} - A岛匿名版`
      return
    }
  }
}
