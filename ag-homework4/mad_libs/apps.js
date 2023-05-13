console.log('testing testing');

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

function startMadLib(){
    for(const key in words){
        prompt(`Enter a ${key}`, "value")
        // prompt method to get user to enter the value with key displayed
        // save to the empty string for each property
        // we are iterating through the object keys
    }
}


