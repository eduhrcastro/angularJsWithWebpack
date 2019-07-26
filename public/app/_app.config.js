config.$inject = [
  '$httpProvider',
  '$urlRouterProvider',
  '$locationProvider'
]

export default function config (
  $httpProvider,
  $urlRouterProvider,
  $locationProvider
) {
  // Remove '!' from path
  $locationProvider.hashPrefix('')

  // Allow cross domain requests
  $httpProvider.defaults.withCredentials = true
  $httpProvider.defaults.useXDomain = true
  delete $httpProvider.defaults.headers.common['X-Requested-With']

  $urlRouterProvider.otherwise('/')
}
