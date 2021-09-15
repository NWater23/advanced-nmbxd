const search = window.location.search
const params = {}
search.replace(/^\?/, '').split('&').forEach(kev => {
  const [k, v] = kev.split('=', 2)
  params[k] = v
})

export default params
