// BEGIN (my solution)
const map = (func, node) => {
  const mappedNode = func(node);
  if (!node.children) {
    return mappedNode;
  }
  const result = node.children.map(elem => map(func, elem));
  return { ...mappedNode, children: result };
};
export default map;
// END

// BEGIN (teacher's solution)
const map = (f, node) => {
  const updatedNode = f(node);

  return node.type === 'directory'
    ? { ...updatedNode, children: node.children.map(n => map(f, n)) } : updatedNode;
};

export default map;
// END