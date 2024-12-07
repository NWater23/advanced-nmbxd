import { 注册粘贴图片 } from '../基础/粘贴图片'
import { 注册追记引用串号 } from '../基础/追记引用串号'
import { 注册自动保存编辑 } from '../基础/保存编辑'
import { formatDateStrOnPage } from '../基础/易读时间'

export default function () {
  注册自动保存编辑()
  注册追记引用串号()
  注册粘贴图片()
  setInterval(formatDateStrOnPage, 2500)
}
