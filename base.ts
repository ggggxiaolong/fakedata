import faker = require('faker')

export function gen(sourceF: Function){
    let jsonData = {};
    let data = []
    for (let index = 0; index < 20; index++) {
        const element = sourceF();
        data.push(element)
    }
    jsonData['data'] = data
    return jsonData
}

export function email(){
    return {'email': faker.internet.email()}
}

export function name(){
    return {'name': faker.name.findName() + " " + faker.name.lastName()}
}

export function lastName(){
    return {'lastName': faker.name.lastName()}
}

export function firstName(){
    return {'firstName': faker.name.firstName()}
}