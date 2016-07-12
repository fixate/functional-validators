import curry from 'lodash/fp/curry';

export default function currify(obj) {
  const newObj = {};
  Object.keys(obj).forEach((k) => {
    const fn = obj[k];
    newObj[k] = fn.__curry ? curry(fn, fn.__arity) : false;
  });

  return newObj;
};
