const HashTable = require('./hashtable')


let  HT = new HashTable()
HT.add('dak', 'quarterback')
HT.add('cee dee lamb', 'wide reciver')
HT.add('michael parson', 'defensive')
HT.add('Curry', 'point guard')


console.log(HT.lookup('dak'))
HT.print()