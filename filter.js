// BEGIN (my solution)
const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (node.type !== 'directory') {
    return node;
  }
  return { ...node, children: node.children.map(el => filter(f, el)).filter(v => v) };
};
export default filter;
// END