const cats = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.splice(3, 0, "Ralph")
}

function destructivelyPrependCat(){
    cats.splice(0, 0, "Bob")
}

function destructivelyRemoveLastCat(){
    cats.splice(2, 1)
}

function destructivelyRemoveFirstCat()
{
    cats.splice(0, 1)
}

function appendCat(name){
    const newCat = [...cats, name]
    return newCat
}

function prependCat(name){
    const newCat = [name, ...cats]
    return newCat
}

function removeLastCat(){
    const oneLessCat = [...cats.slice(0, 2)]
    return oneLessCat
}

function removeFirstCat(){
    const oneLessCat = [...cats.slice(1, 3)]
    return oneLessCat
}
