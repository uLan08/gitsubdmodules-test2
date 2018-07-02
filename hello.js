const hellos = [
    'hello',
    'ola',
    'bonjour',
    'ni hao',
    'annyeonghaseyo'
]

module.exports = {
    sayHello: () => {
        const index = Math.floor(Math.random() * hellos.length)
        return hellos[index]
    }
}