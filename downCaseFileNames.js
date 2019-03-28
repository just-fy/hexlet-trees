// BEGIN (my_solution)
const traversalTree = (node) => {
  if (!node.children) {
    return { ...node, name: node.name.toLowerCase() };
  }

  const result = node.children.map(traversalTree);
  return { ...node, children: result };
};
export default traversalTree;
// END

// BEGIN (teacher's solution)
const downcaseFileNames = (node) => {
  if (node.type === 'directory') {
    return { ...node, children: node.children.map(downcaseFileNames) };
  }
  return { ...node, name: node.name.toLowerCase() };
};

export default downcaseFileNames;
// END