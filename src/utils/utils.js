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
