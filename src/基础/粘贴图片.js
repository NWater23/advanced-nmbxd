export function 注册粘贴图片 () {
  window.addEventListener('paste', e => {
    const files = (e.clipboardData || e.originalEvent.clipboardData).files
    if (files.length) { document.querySelector('input[type="file"][name="image"]').files = files }
  })
}
