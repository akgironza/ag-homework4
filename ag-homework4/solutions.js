// setAlarm
function setAlarm(employed, vacationing){
    if (employed && vacationing == false){
        console.log(true)
    }
    else {
        console.log(false)
    }
};

setAlarm(true, true);
setAlarm(false, false);
setAlarm(false, true);
setAlarm(true, false);

// Count Odd Numbers
/*
function oddNumberCount(number){
    for 
}
*/

// Disemvoweling Trolls
function trollsBeGone(sentence){
    const newSentence = sentence.replace(/[aeiou]/gi, '');
    console.log(newSentence);
}

trollsBeGone('I thought we were talking about fantasy trolls not online trolls');

// Bank Account Summary
const bankInfo = {
    savings: 13579,
    checking: 2468,
    moneyMarket: 987654321,
    creditCard: -123456789
}

/*
function bankAccountSummary(moneyStuff){
    
    
    const sumBankInfo = Object.values(moneyStuff);
    // here i want to use reduce
}

bankAccountSummary(bankInfo);
*/

