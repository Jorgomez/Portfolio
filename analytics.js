import ReactGA from 'react-ga4'

// Inicializa Google Analytics con tu ID de medición
export const initAnalytics = () => {
  ReactGA.initialize('G-4F9EENPM7Z', {
    debug: true
  })
}

export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

export const logEvent = (category, action, label) => {
  console.log(
    `Event Sent: Category=${category}, Action=${action}, Label=${label}`
  )
  ReactGA.event({
    category,
    action,
    label
  })
}
