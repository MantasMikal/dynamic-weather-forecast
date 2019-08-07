// Tells if it is a day
export function getIsDay (timeZone) {
    let options = {
        timeZone: timeZone,
        hour: 'numeric'
      },
      formatter = new Intl.DateTimeFormat([], options)
  
    const hours = formatter.format(new Date())
    return hours > 6 && hours < 18 ? true : false
  }
  
  //Gets current time based on timezone
  export function getCurrentTime (timezone) {
    let options = {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric'
      },
      formatter = new Intl.DateTimeFormat([], options)
  
    const time = formatter.format(new Date())
    return time
  }
  