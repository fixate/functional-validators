export const isLength = (len, str) => str.length === len;
isLength.__curry = true;
isLength.__arity = 2;

export const maxLength = (len, str) => str.length < len;
maxLength.__curry = true;
maxLength.__arity = 2;

export const minLength = (len, str) => str.length > len;
minLength.__curry = true;
minLength.__arity = 2;
