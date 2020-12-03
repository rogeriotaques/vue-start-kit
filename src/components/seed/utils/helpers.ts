/**
 * Checks if the given item is an object.
 * @param {any} item
 * @returns {boolean}
 */
const isObject = (item: any): boolean => typeof item === 'object' && !Array.isArray(item);

/**
 * Clones a given object. Works very similar to Object.assign, but clones deeply.
 *
 * @param {object} target
 * @param {object} source
 * @param {boolean} deep
 * @returns {object}
 */
export const clone = (target: any, source: any, deep = false): Record<string, any> => {
  if (deep || !Object.assign) {
    const isDeep = (prop: string) => isObject(source[prop]) && target !== null && target.hasOwnProperty(prop) && isObject(target[prop]);

    const replaced = Object.getOwnPropertyNames(source)
      .map((prop) => ({ [prop]: isDeep(prop) ? clone(target[prop], source[prop], deep) : source[prop] }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    return {
      ...target,
      ...replaced
    };
  } else {
    return Object.assign(target, source);
  }
};
