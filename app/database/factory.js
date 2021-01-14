'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/AuthTokens', (faker) => {
  return {
    company: 'Salestime',
    token: 'A4DEDE7FCCD54A3E8A56AD51AC64E94F'
  }
})
