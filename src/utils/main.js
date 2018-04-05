import { css } from 'styled-components'

const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

const normalize = (step) => {
	return step.toLowerCase().replace(/_/g, ' ');
}

const trimAll = (step) => {
	return step.replace(/\s+/g, '').replace(/\+/g, ' + ');
}

const trimOne = (step) => {
	return step.replace(/\s+/, '');
}

export {
	normalize,
	trimAll,
	trimOne,
	media,
};