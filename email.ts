import faker = require('faker')

function gen(sourceF: Function){
    let jsonData = {};
    let data = []
    for (let index = 0; index < 20; index++) {
        const element = sourceF();
        data.push(element)
    }
    jsonData['data'] = data
    return jsonData
}

function email(){
    return {'email': faker.internet.email()}
}

console.log(JSON.stringify(gen(email)))