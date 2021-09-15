export function 自动标题 () {
  const title = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-info .h-threads-info-title').textContent.trim()
  if (title !== '无标题') {
    document.querySelector('title').textContent = title
    return
  }
  const lines = document.querySelector('.h-threads-list .h-threads-item-main .h-threads-content').textContent.split('\n')
  for (let line in lines) {
    if (!(line = line.trim())) {
      document.querySelector('title').textContent = line
      return
    }
  }
}
