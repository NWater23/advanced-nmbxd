const DOMAINS = [
  'www.nmbxd1.com'
]

const match = DOMAINS.map(d => [`http://${d}/*`, `https://${d}/*`]).flat()

module.exports = {
  name: '增强黎明版',
  description: '增强黎明版的一些交互',
  namespace: 'no1xsyzy',
  match,
  grant: ['GM_setValue', 'GM_getValue', 'GM_deleteValue'],
  require: ['https://code.jquery.com/jquery-2.2.4.min.js'],
  license: 'Apache License, Version 2.0 (Apache-2.0); https://opensource.org/licenses/Apache-2.0'
}
