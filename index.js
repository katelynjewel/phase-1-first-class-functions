const newFunction = () => `This is a new function`;

function receivesAFunction(newFunction){
    return newFunction();
}

const difFunction = () => `Return this function`;

function returnsANamedFunction(difFunction){
    return difFunction();
}
