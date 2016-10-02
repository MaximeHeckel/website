import React, { PropTypes } from 'react';

import {
  default as ContactModal,
} from '../ContactModal';

const MODAL_MAP = {
  ['contact']: ContactModal,
};

export default function PromptDispatcher({ prompt }) {
  const [type, data] = prompt;
  const TheModal = MODAL_MAP[type];
  return (<TheModal {...data} />);
}

PromptDispatcher.propTypes = {
  prompt: PropTypes.array.isRequired,
};
