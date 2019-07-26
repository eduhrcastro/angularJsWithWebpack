import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import config from './_app.config'
import home from '../dashboard/home/home.module'

angular.module('app', [
  uirouter,
  home
])
  .config(config)
