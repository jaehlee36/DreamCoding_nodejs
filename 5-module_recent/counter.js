let count = 0;
export function increase () {
  count++;
}
export function getCount() {
  return count;
}

console.log(module.exports.getCount);