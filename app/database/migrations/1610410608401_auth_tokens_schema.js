'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthTokensSchema extends Schema {
  up () {
    this.create('auth_tokens', (table) => {
      table.increments()
      table.string('company', 80).notNullable()
      table.string('token', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('auth_tokens')
  }
}

module.exports = AuthTokensSchema
