import ReactGA from 'react-ga4'

export const initAnalytics = () => {
  ReactGA.initialize('G-4F9EENPM7Z')
}

export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}
