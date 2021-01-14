'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AuthTokens extends Model {
    static get table () {
        return 'auth_tokens'
    }
}

module.exports = AuthTokens
