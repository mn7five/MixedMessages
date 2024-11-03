function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

const messageComponents = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortunePredict: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

// Store the 'wisdom' in an array
let mixedMessages = []

// Iterate over the message components
for(let propertyName in messageComponents) {
    let valueIndex = generateRandomNumber(messageComponents[propertyName].length)

    // use the object's properties to customize the message being added to mixedMessages
    switch(propertyName) {
        case 'signInfo':
            mixedMessages.push(`Your sign right now is a "${messageComponents[propertyName][valueIndex]}".`)
            break
        case 'fortunePredict':
            mixedMessages.push(`You are having "${messageComponents[propertyName][valueIndex]}".`)
            break
        case 'advice':
            mixedMessages.push(`You should "${messageComponents[propertyName][valueIndex]}".`)
            break
        default:
            mixedMessages.push('There is not enough info.')
    }
}

function formatMixedMessages(wisdom) {
    const formatted = mixedMessages.join('\n')
    console.log(formatted)
}
    
formatMixedMessages(mixedMessages);