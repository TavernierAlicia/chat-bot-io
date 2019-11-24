class HelloWorld {
  constructor() {
    this.say = 'Hello World';
  }

  speak(say = this.say) {
    console.log(say);
  }
}

const helloWorld = new HelloWorld();

helloWorld.speak();
helloWorld.speak('bonjour tout le monde');
