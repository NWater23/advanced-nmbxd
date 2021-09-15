import { 载入编辑, 注册自动保存编辑 } from '../基础/保存编辑'
import { 注册追记引用串号 } from '../基础/追记引用串号'
import { 注册粘贴图片 } from '../基础/粘贴图片'
import { 自动标题 } from '../基础/自动标题'

export default function () {
  载入编辑()
  注册追记引用串号()
  注册自动保存编辑()
  注册粘贴图片()
  自动标题()
}
