import { reduce } from 'hexlet-immutable-fs-trees';

// BEGIN (write your solution here)
const fileSize = node =>
  reduce((acc, n) => (node.type === 'file' ? acc + node.size : acc), node, 0);

const sortSizeDirs = (tree) => {
  return tree.children
    .map(n => [n.name, fileSize(n)])
    .sort((a, b) => b[1] - a[1]);

};

export default sortSizeDirs;
// END
