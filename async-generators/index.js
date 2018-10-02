import fetch from 'node-fetch';
import 'babel-polyfill';

export default function asyncGenerators() {
  function* createFlow() {
    console.log('in generator - before yield');
    const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('back in generator');
    data.json().then(json => console.log(json));
  }
  const generator = createFlow();
  console.log(generator);
  function doWhenDataReceived(value) {
    generator.next(value);
  }
  const futureData = generator.next();
  futureData.value.then(doWhenDataReceived);
  console.log('me first');
}
