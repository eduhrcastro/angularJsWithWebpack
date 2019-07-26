routes.$inject = ['$stateProvider']

export default function routes ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'home'
      // lazyLoad: $transition$ => {
      // //   return $transition$.injector().get('$ocLazyLoad').load('./home.module.js')
      // }
    })
}
