import 串 from './路由/串'
import 版块 from './路由/版块'
import 回复成功 from './路由/回复成功'
import 未知 from './路由/未知'

const path = window.location.pathname
const pathsegs = path.split('/').splice(1)
switch (pathsegs[0]) {
  case 't':
    串()
    break
  case 'f':
    版块()
    break
  case 'Forum':
    if (pathsegs[1] === 'po' && pathsegs[2] === 'id') { 版块() } else { 未知() }
    break
  case 'Home':
    if (path === '/Home/Forum/doReplyThread.html') { 回复成功() } else { 未知() }
    break
  default:
    未知()
}
