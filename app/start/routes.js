'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('user', 'UserController.store')
    Route.put('user/:id', 'UserController.update')
    Route.delete('user/:id', 'UserController.delete')
    Route.get('user/:id', 'UserController.find')
    Route.get('user/paginate/:page', 'UserController.pagination')
}).prefix('api/v1').middleware('customAuth')
