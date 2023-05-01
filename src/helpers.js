import React from "react";

const choice = function(items){
    let selection = Math.floor(Math.random() * items.length)
    return items[selection]
}

const remove = function(items, item){
    let index = items.indexOf(item)
    if (index != -1){
        let result = items[index]
        items.splice(index, 1)
        return result
    }
    else{
        return undefined
    }
}

export {choice, remove}