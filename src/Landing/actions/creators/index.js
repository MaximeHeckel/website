import { createAction } from 'redux-actions';
import checkHelloWorld from './helloworld';
import {
  HELLO_WORLD,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '..';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export const helloworldrequest = () => ({
  type: HELLO_WORLD,
  payload: checkHelloWorld(),
});
