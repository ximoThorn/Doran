// 判断数据类型
const class2type = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Object]': 'object',
  '[object Error]': 'error',
  '[object Symbol]': 'symbol'
};
const toString = Object.prototype.toString;

export function typeValide(obj) {
  if (obj == null) {
    return obj + '';
  };
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[toString.call(obj)] || 'object'
    : typeof obj;
};

// 判断参数是否是其中之一
export function validValue(val = '', arr = []) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === val) {
      return true;
    }
  };
  return false;
};
