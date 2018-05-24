const faker = require('faker')

var emails = {}
emails['data'] = []
for (var i = 0; i < 20; i++) {
	var data = {}
	data['email'] = faker.internet.email()
	emails['data'].push(data)
}
console.log(JSON.stringify(emails))