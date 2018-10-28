module.exports = function recursion(tree){
  const arr=[];

  function recursionarr(tree, index, array){
    if(!array[index]){
      array[index]=[];
    }
    array[index].push(tree.value);
    if("left" in tree){
      recursionarr(tree.left,index+1,array);
    }
    if("right" in tree){
      recursionarr(tree.right, index+1, array);
    }
  }
  
  recursionarr(tree,0,arr);
  return arr;
}