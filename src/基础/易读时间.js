import $ from 'jquery'

/*
 *  @param {string} machineReadableTime 1970-01-01(四)00:00:00
 */
export function getFriendlyTime (machineReadableTime) {
  /*
    const yr = machineReadableTime.slice(0, 4)
    const mo = machineReadableTime.slice(5, 7)
    const day = machineReadableTime.slice(8, 10)
    const hr = machineReadableTime.slice(13, 15)
    const min = machineReadableTime.slice(16, 18)
    const sec = machineReadableTime.slice(19, 21)
    const date = new Date(yr, mo - 1, day, hr, min, sec)
  */
  const date = new Date(machineReadableTime)
  const now = new Date()
  if (now < date) return machineReadableTime
  let friendlyDate = machineReadableTime.slice(0, 10)
  let friendlyTime = machineReadableTime.slice(13, 21)
  const weekday = machineReadableTime.slice(11, 12)

  const diff = (now.getTime() - date.getTime()) / 1000
  if (diff < 60) {
    friendlyTime = `${Math.floor(diff)}秒前`
  } else if (diff < 3600) {
    friendlyTime = `${Math.floor(diff / 60)}分钟前`
  } else if (diff < 24 * 3600) {
    friendlyTime = `${Math.floor(diff / 3600)}小时前 ${friendlyTime}`
  }

  const yesterday = new Date(new Date(now - 1000 * 60 * 60 * 24).toLocaleDateString())
  if (now.toLocaleDateString() === date.toLocaleDateString()) {
    friendlyDate = '今天'
  } else if (yesterday.toLocaleDateString() === date.toLocaleDateString()) {
    friendlyDate = '昨天'
  } else if (yesterday - date < 1000 * 60 * 60 * 24 * 30) {
    friendlyDate = `${Math.floor((now - date) / (1000 * 60 * 60 * 24))}天前`
  } else if (now.getFullYear() === date.getFullYear()) {
    friendlyDate = friendlyDate.slice(5)
  } else {
    friendlyDate = `${now.getFullYear() - date.getFullYear()}年前 ${friendlyDate}`
  }
  return `${friendlyDate}(${weekday})${friendlyTime}`
}

export function formatDateStrOnPage () {
  const targets = $('span.h-threads-info-createdat')
  targets.each(function () {
    const target = $(this)
    const timeStr = target.attr('title') || target.text().trim()
    target.attr('title', timeStr)
    const friendlyTime = getFriendlyTime(timeStr)
    target.text(friendlyTime)
  })
}
