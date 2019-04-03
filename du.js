import { reduce } from 'hexlet-immutable-fs-trees';

// BEGIN (write your solution here)
const fileSize = node => reduce((acc, n) => (n.type === 'file' ? acc + n.meta.size : acc), node, 0);

const sortSizeDirs = tree => tree.children
  .map(n => [n.name, fileSize(n)])
  .sort((a, b) => b[1] - a[1]);

export default sortSizeDirs;
// END

// BEGIN (teacher's solution)
const calculatefilesSize = node => reduce((acc, n) => {
  if (n.type === 'directory') {
    return acc;
  }

  return acc + n.meta.size;
}, node, 0);

const du = (node) => {
  const result = node.children.map(n => [n.name, calculatefilesSize(n)]);
  // Обычный дестракчеринг. JS позволяет пропускать имена если они не используются
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

export default du;
// END