import { createAction } from 'redux-actions';
import contact from './mail';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEND_MAIL,
} from '..';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export const contactrequest = (data) => ({
  type: SEND_MAIL,
  payload: contact(data),
});
