// BEGIN (my solution )
const findFilesByName = (tree, str) => {
  const iter = (node, p, acc) => {
    const newPath = path.join(p, node.name);
    if (!node.children) {
      if (node.name.includes(str)) {
        return [...acc, newPath];
      }
      return acc;
    }
    return node.children.reduce((cAcc, nn) => iter(nn, newPath, cAcc), acc);
  };

  return iter(tree, '', []);
};

export default findFilesByName;
// END

// BEGIN (teacher's solution)
const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    const newAncestry = path.join(ancestry, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;
// END