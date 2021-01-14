'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AuthTokens = use('App/Models/AuthTokens')

class Authentication {
    /**
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Function} next
     */
    async handle({request, response}, next) {
        const token = request.header('token')

        if (!token) {
            return response.status(401).send({error: 'unauthorized'})
        }

        let authToken = await AuthTokens.findBy('token', token)

        if (!authToken) {
            return response.status(401).send({error: 'unauthorized'})
        }
        // call next to advance the request
        await next()
    }
}

module.exports = Authentication
