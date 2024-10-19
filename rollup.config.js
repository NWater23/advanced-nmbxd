import metablock from 'rollup-plugin-userscript-metablock'

const pkg = require('./package.json')

const metab = metablock({
  file: './src/meta.js',
  override: {
    version: pkg.version,
    homepage: pkg.homepage,
    author: pkg.author
  }
})

export default {
  input: 'src/main.js',
  output: {
    file: 'advanced-nmbxd.user.js',
    format: 'iife',
    globals: {
      jquery: '$'
    }
  },
  plugins: [
    metab
  ],
  external: ['jquery']
}
