'use strict'

const path = require('path')
const _ = require('lodash')

const packageJson = require('../../package.json')
const environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const base = {
  /**
   * Root folder
   */
  root: path.normalize(path.resolve(__dirname, '../')),

  /**
   * Running environment
   */
  env: environment,

  /**
   * Application version
   */
  version: process.env.APP_VERSION || packageJson.version,

  /**
   * Environment 
   */
  debug: environment !== 'production',

  /**
   * Application name
   */
  name: process.env.APP_NAME || 'Softh Axi Notification',

  /**
  * Application description
  */
  description: process.env.APP_DESC || packageJson.description,

  /**
   * Session Keys
   */
  keys: [ process.env.SESSION_KEY || 'hariliburnaikudarabucsfreetest'],

  /**
   * Secret Key
   */
  secret: process.env.RESTFUL_SECRET_KEY || 'W3arEtheCH4mpi0n'
}

const specific = {
  development: {
    /**
     * Running port
     */
    port: 6000,

    /**
     * Application name
     */
    name: process.env.APP_NAME || 'Softh Axi Notification - Development',
  },
  test: {
    /**
     * Running port
     */
    port: 6001,

    /**
     * Application name
     */
    name: process.env.APP_NAME || 'Softh Axi Notification - Test Realm',
  },
  staging: {
    /**
     * Running port
     */
    port: process.env.PORT || 6000,
  },
  production: {
    /**
     * Running port
     */
    port: process.env.PORT || 6000,
  }
}

module.exports = _.merge(base, specific[environment])