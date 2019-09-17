const expect = require('chai').expect
const request = require('request-promise-native')

describe('Server', () => {
    it('Should return an empty user before logging', async () => {
        let user = await request.get('http://localhost:8000/user')
        user = JSON.parse(user)
        expect(user).to.be.an('object')
        expect(user).to.deep.equal({})
    })
    it('Should be able to login properly', async () => {
        let logginRequest = await request({
            method: 'post',
            uri: 'http://localhost:8000/user/login',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                email: 'merunasgrincalaitis@gmail.com',
                password: 'a',
            },
            json: true,
        })

        expect(logginRequest).to.be.an('object')
        expect(logginRequest).to.deep.equal({
            ok: true,
            msg: 'User found',
            name: 'merunas',
        })
    })
    it('Should get a user name after being logged in', async () => {
        let requestUser = await request('http://localhost:8000/user')
        requestUser = JSON.parse(requestUser)

        expect(requestUser).to.be.an('object')
        expect(requestUser.name).to.equal('merunas')
    })
})
