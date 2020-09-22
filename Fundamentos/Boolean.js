let isAtivo = false

console.log(isAtivo)

isAtivo = false

console.log(isAtivo)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=' )

isAtivo = 1

console.log(!!isAtivo)

console.log(!isAtivo)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=' )

console.log("Os verdadeiros ...." )

console.log(!!3 )
console.log(!!-1 )
console.log(!!' ' )
console.log(!![])
console.log(!!{} )
console.log(!!Infinity )
console.log(!!(isAtivo = true) )

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=' )

console.log("Os falsos ...." )

console.log(!!0 )
console.log(!!'' )
console.log(!!null )
console.log(!!NaN)
console.log(!!undefined )
console.log(!!(isAtivo = false) )

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=' )

console.log("Para finalizar" )

console.log(!!('' || null || 0 || ' '))

let nome = ''


console.log(nome || 'Desconhecido')

nome = 'Lucas'

console.log(nome || 'Desconhecido')

