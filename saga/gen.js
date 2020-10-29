function* gen(i) {
  yield i;
  yield i + 10;
  return 25;
}

const g = gen(5)

console.log(g.next())
console.log(g.next())
console.log(g.next())