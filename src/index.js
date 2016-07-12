import combineValidators from './combineValidators';
import currify from './currify';
import * as length from './length';
import * as existance from './existance';

export default {
  combineValidators,
  length: currify(length),
  existance: currify(existance),
};
