import {
  HELLO_WORLD,
} from '..';
import checkHelloWorld from './helloworld';

export const helloworldrequest = () => ({
  type: HELLO_WORLD,
  payload: checkHelloWorld(),
});
