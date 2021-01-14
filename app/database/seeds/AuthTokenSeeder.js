'use strict'

/*
|--------------------------------------------------------------------------
| AuthTokenSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AuthTokenSeeder {
  async run () {
    await Factory
      .model('App/Models/AuthTokens')
      .create()
  }
}

module.exports = AuthTokenSeeder
