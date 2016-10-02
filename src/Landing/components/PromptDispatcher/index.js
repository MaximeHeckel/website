import React, { PropTypes } from 'react';

import {
  default as ContactModal,
} from '../ContactModal';

import {
  default as ThankyouModal,
} from '../ThankyouModal';

const MODAL_MAP = {
  ['contact']: ContactModal,
  ['thankyou']: ThankyouModal,
};

export default function PromptDispatcher({ prompt }) {
  const [type, data] = prompt;
  const TheModal = MODAL_MAP[type];
  return (<TheModal {...data} />);
}

PromptDispatcher.propTypes = {
  prompt: PropTypes.array.isRequired,
};
