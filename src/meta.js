const DOMAINS = [
  'www.nmbxd1.com'
]

const match = DOMAINS.map(d => [`http://${d}/*`, `https://${d}/*`]).flat()

module.exports = {
  name: '增强x岛匿名版',
  description: '保存编辑内容，发串前显示预览，粘贴插入图片，自动设置网页标题（修改自no1xsyzy的增强黎明板）',
  namespace: 'nwater23',
  match,
  grant: ['GM_setValue', 'GM_getValue', 'GM_deleteValue'],
  require: [
    'https://code.jquery.com/jquery-2.2.4.min.js'
  ],
  license: 'Apache-2.0'
}
