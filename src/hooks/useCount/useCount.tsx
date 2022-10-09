import React from 'react';

const useCount = (numbersArray: Array<number>, operatorsArray: Array<string>) => {
            const operators = ['*', '/', '%']
            while (operatorsArray.indexOf('*') !== -1 || operatorsArray.indexOf('/') !== -1 || operatorsArray.indexOf('%') !== -1) {
                if(((operatorsArray.indexOf('*') < operatorsArray.indexOf('/')) || (operatorsArray.indexOf('*') !== -1 && operatorsArray.indexOf('/') === -1))
                 && ((operatorsArray.indexOf('*') < operatorsArray.indexOf('%')) || (operatorsArray.indexOf('*') !== -1 && operatorsArray.indexOf('%') === -1))) {
                    let i = operatorsArray.indexOf('*')
                    let value = numbersArray[i] * numbersArray[i + 1]
                    numbersArray.splice(i, 1)
                    operatorsArray.splice(i, 1)
                    numbersArray[i] = +value.toFixed(3)
                 }
                if(((operatorsArray.indexOf('/') < operatorsArray.indexOf('*')) || (operatorsArray.indexOf('/') !== -1 && operatorsArray.indexOf('*') === -1))
                 && ((operatorsArray.indexOf('/') < operatorsArray.indexOf('%')) || (operatorsArray.indexOf('/') !== -1 && operatorsArray.indexOf('%') === -1))) {
                    let i = operatorsArray.indexOf('/')
                    let value = numbersArray[i] / numbersArray[i + 1]
                    numbersArray.splice(i, 1)
                    operatorsArray.splice(i, 1)
                    numbersArray[i] = +value.toFixed(3)
                 }
                if(((operatorsArray.indexOf('%') < operatorsArray.indexOf('*')) || (operatorsArray.indexOf('%') !== -1 && operatorsArray.indexOf('*') === -1))
                 && ((operatorsArray.indexOf('%') < operatorsArray.indexOf('/')) || (operatorsArray.indexOf('%') !== -1 && operatorsArray.indexOf('/') === -1))) {
                    let i = operatorsArray.indexOf('%')
                    let value = numbersArray[i] % numbersArray[i + 1]
                    numbersArray.splice(i, 1)
                    operatorsArray.splice(i, 1)
                    numbersArray[i] = +value.toFixed(3)
                 }
            }
            while (operatorsArray.lastIndexOf('+') !== -1) {
                let i = operatorsArray.lastIndexOf('+')
                let value = numbersArray[i] + numbersArray[i + 1]
                numbersArray.splice(i, 1)
                operatorsArray.splice(i, 1)
                numbersArray[i] = +value.toFixed(3)
            }
            while (operatorsArray.lastIndexOf('-') !== -1) {
                let i = operatorsArray.lastIndexOf('-')
                let value = numbersArray[i] - numbersArray[i + 1]
                numbersArray.splice(i, 1)
                operatorsArray.splice(i, 1)
                numbersArray[i] = +value.toFixed(3)
            }
            return numbersArray[0]
}
export default useCount