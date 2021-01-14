'use strict'

const User = use('App/Models/User')
const {validate} = use('Validator')

class UserController {
    async store({request, response}) {
        const rules = {
            username: 'required|min:5',
            email: 'required|email',
            password: 'required|min:4'
        }

        const data = request.all()

        const validation = await validate(data, rules)

        if (validation.fails()) {
            return validation.messages()
        }


        try {
            const user = await User.create(data)

            return user
        } catch (err) {
            return response.status(500).send({error: err})
        }
    }

    async update({request, response, params}) {
        const rules = {
            username: 'min:5',
            email: 'email',
            password: 'min:4'
        }

        const data = request.all()

        const validation = await validate(data, rules)

        if (validation.fails()) {
            return validation.messages()
        }

        try {
            let user = await User.findBy('id', params.id)

            if (!user) {
                return response.status(404).send({error: 'Id not found'})
            }

            user.merge(request.only('username'))
            user.merge(request.only('email'))
            user.merge(request.only('password'))

            user.save()

            return user
        } catch (err) {
            return response.status(500).send({error: err})
        }
    }

    async find({response, params}) {
        try {
            let user = await User.findBy('id', params.id)

            if (!user) {
                return response.status(404).send({error: 'Id not found'})
            }

            return user
        } catch (err) {
            return response.status(500).send({error: err})
        }
    }

    async pagination({params}) {
        return await User.query().orderBy('id', 'cres').paginate(params.page, 10)
    }


    async delete({response, params}) {
        try {
            let user = await User.findBy('id', params.id)

            if (!user) {
                return response.status(404).send({error: 'Id not found'})
            }
            user.delete()

            return user
        } catch (err) {
            return response.status(500).send({error: err})
        }
    }
}

module.exports = UserController
