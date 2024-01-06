const LinkedList = require('./linkedList')


const LL = new LinkedList()

LL.add('LeBron James')
LL.add('Dak')
LL.add('Alaska')
LL.add('Batman')
LL.add('Bruce Wayne')

console.log(LL.size())
console.log(LL.removeAt(3))
console.log(LL.elementAt(3))
console.log(LL.indexOf('Batman'))
console.log(LL.size())