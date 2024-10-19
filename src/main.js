import 串 from './路由/串'
import 串只看po from './路由/串只看po'
import 版块 from './路由/版块'
import 回复成功 from './路由/回复成功'
import 未知 from './路由/未知'
import { 路径, 路径分块 } from './基础/URL信息'

const 一层路径 = 路径分块[0] === 'm' ? 路径分块[1] : 路径分块[0]

switch (一层路径) {
  case 't':
    串()
    break
  case 'f':
    版块()
    break
  case 'Forum':
    if (路径分块[1] === 'po' && 路径分块[2] === 'id') { 串只看po() } else { 未知() }
    break
  case 'Home':
    if (路径 === '/Home/Forum/doReplyThread.html') { 回复成功() } else { 未知() }
    break
  default:
    未知()
}
