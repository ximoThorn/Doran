import Notification from './src'

let noticeInstant;
const types = ['success', 'info', 'warning', 'error']

function getNotification () {
  noticeInstant = noticeInstant || Notification.newInstance()
  return noticeInstant;
}

const notice = () => {
  const theNotification = getNotification()
  let obj = {}
  obj.open = (options) => theNotification.notice(options)

  types.forEach(item => {
    obj[item] = (options) => theNotification.notice(options, item)
  })

  return obj
}

export default notice()
