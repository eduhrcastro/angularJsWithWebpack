import './home.css'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './home.routes'
import HomeCtrl from './home.controller'

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeCtrl', HomeCtrl)
  .name
