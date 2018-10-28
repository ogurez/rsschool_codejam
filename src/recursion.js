module.exports = function recursion(tree) {
  const arr = [];
  function recursionarr(treeobj, index, arrtree) {
    if (!arrtree[index]) {
      arrtree[index] = [];
    }
    arrtree[index].push(treeobj.value);
    if ('left' in treeobj) {
      recursionarr(treeobj.left, index + 1, arrtree);
    }
    if ('right' in treeobj) {
      recursionarr(treeobj.right, index + 1, arrtree);
    }
  }
  recursionarr(tree, 0, arr);
  return arr;
};
