const hellos = [
    'hello',
    'ola',
    'bonjour',
    'ni hao',
    'annyeonghaseyo'
]

modules.export = {
    sayHello() {
        const index = Math.floor(Math.random() * hellos.length)
        return hellos[index]
    }
}