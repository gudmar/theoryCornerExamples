

// {request: 'test', operation: 'strong', data: [3], expectedResult: [6]},

onmessage = function(e){
    const {reuqest, operation, data, expectedResult} = e.data;
    let result = getResult(operation, data);
    return procesRequest(request, result, expectedResult)
}

function procesRequest(request, result, additionalData){
    if (request === 'test') {
        return compare(result, additionalData)
    }
}

function compare(a, b){
    // comparation is a very complex problem in JS,
    // it cannot be dealed in less then about 500 lines of code
    // so the simplest solution here
    return JSON.stringify(a) === JSON.stringify(b)
}

function getResult(operation, data){
    if (operation === 'strong') return strong(data[0]);
    return null;
}

function strong(number){
    let output = 1;
    for (let i = 1; i < number; i++){
        output *= i;
    }
    return [output];
}