import { fiBsModal, testOrakSoftUi } from "./index";
import { fiPostJson } from './core/FiPostJson';
import { fiPostFormData } from './FiRests/FiPostFormData';

/**
 * @typedef {object} OrakSoftUi
 * @property {function} testOrakSoftUi
 * @property {function} fiPostFormData
 * @property {function} fiBsModal
 */
export const OrakSoftUi = {
  testOrakSoftUi,
  fiPostFormData,
  fiPostJson,
  fiBsModal,
  // diğer fonksiyonlar...
};