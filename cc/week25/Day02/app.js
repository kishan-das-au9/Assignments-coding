function* generateRes(obj) {
  const propkeys = Reflect.ownKeys(obj)
  console.log(propkeys)
  for (const [i, prop] of propkeys.entries()) {
    yield { [prop]: i+1, title: obj[prop].title }
  }
}
const obj = {
  "Post-1": {
    "userId": 1,
    "id": 1,
    "title": "sunt facere repellat ",
    "body": `quia et suscipit\nsuscipit recusandae `
  },
  "Post-2": {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": `est rerum tempore vitae\nsequi sint `
  },
  "Post-3": {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi",
    "body": `et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad`
  },
  "Post-4": {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": `ullam et saepe reiciendis voluptatem adipisci `
  }
}

const abc = generateRes(obj)

console.log(abc.next())
console.log(abc.next())
console.log(abc.next())
console.log(abc.next())
console.log(abc.next())
