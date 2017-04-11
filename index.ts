/**
 * Created by joshjahans on 11/04/2017.
 */

class HelloTS {
  constructor(public greeting: string) {

  }

  sayHello() {
    console.log(`${this.greeting}, World!`);
  }
}

new HelloTS('Hello');
