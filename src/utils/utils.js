export function patchChild() {

};

export function patchChildren (ctx, componentName, ignoreComponentNames = []) {
  if (!Array.isArray(ignoreComponentNames)) {
    ignoreComponentNames = [ignoreComponentNames];
  }
  return ctx.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    if (ignoreComponentNames.indexOf(child.$options.name) < 0) {
      const foundChilds = patchChildren(child, componentName);
      return components.concat(foundChilds);
    } else {
      return components;
    }
  }, []);
}

export function accMul(arg1, arg2) {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
