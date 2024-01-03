// stack.js
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Método para agregar un valor al final de la pila
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Método para eliminar y devolver el valor al final de la pila
  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Método para obtener la longitud de la pila
  size() {
    return this.count;
  }

  // Método para obtener el valor al final de la pila
  peek() {
    return this.storage[this.count - 1];
  }
}


module.exports = Stack;

