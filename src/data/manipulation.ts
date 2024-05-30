export function convertToObject(array) {
  return Object.keys(array).reduce((acc, key) => {
    const innerObject = array[key]
    const innerKey = Object.keys(innerObject)[0]
    acc[innerKey] = innerObject[innerKey]
    return acc
  }, {})
}

export function filterObject(item, remove) {
  return Object.keys(item).filter(key => !remove.includes(Number(key))).reduce((obj, key) => {
    return {
      ...obj, [key]: item[key]
    }
  }, {})
}

export const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

export function replaceChar(link, array) {
  return link.replace(/\{var(\d+)\}/g, (substr, idx) => array[parseInt(idx) - 1])
}