const hellos = [
    'hello',
    'ola',
    'bonjour',
    'ni hao',
    'annyeonghaseyo'
]

export function sayHello() {
    const index = Math.floor(Math.random() * hello.length)
    return hellos[index]
}