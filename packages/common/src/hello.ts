class Hello {
  constructor(public name: string) {}

  sayHello() {
    return `Hello ${this.name}`
  }

  sayName() {
    return `My name is ${this.name}`
  }
}

export default Hello
