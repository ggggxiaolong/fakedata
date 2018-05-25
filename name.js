const faker = require('faker')

var names = {}
var data = []

for (let index = 0; index < 20; index++) {
    const name = {'name':faker.name.firstName() + " " + faker.name.lastName()}
    data.push(name)
}

names['data'] = data
console.log(JSON.stringify(names))