import React from 'react';
import PropTypes from 'prop-types'; 

import {
  default as ContactModal,
} from '../ContactModal';

import {
  default as ThankyouModal,
} from '../ThankyouModal';

import {
  default as CVModal,
} from '../CVModal';

const MODAL_MAP = {
  'contact': ContactModal,
  'thankyou': ThankyouModal,
  'cv': CVModal,
};

export default function PromptDispatcher({ prompt }) {
  const [type, data] = prompt;
  const TheModal = MODAL_MAP[type];
  return (<TheModal {...data} />);
}

PromptDispatcher.propTypes = {
  prompt: PropTypes.array.isRequired,
};
