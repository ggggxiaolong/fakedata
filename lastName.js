const faker = require('faker')

const firstnams = {}
const data = []

for (let index = 0; index < 20; index++) {
    const element = {'lastName':faker.name.lastName()};
    data.push(element)
}

firstnams['data'] = data
console.log(JSON.stringify(firstnams))