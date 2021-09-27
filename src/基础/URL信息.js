const search = window.location.search
export const 搜索参数 = {}
search.replace(/^\?/, '').split('&').forEach(kev => {
  const [k, v] = kev.split('=', 2)
  搜索参数[k] = v
})

export const 路径 = window.location.pathname
export const 路径分块 = 路径.split('/').splice(1)
