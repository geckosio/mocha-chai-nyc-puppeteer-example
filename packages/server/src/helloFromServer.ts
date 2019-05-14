const helloFromServer = (sayHello = true) => {
  if (sayHello) return 'Hello from the server.'
  else return 'Server says goodbye.'
}

export default helloFromServer
