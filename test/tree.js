var tree = {
  name: 'root',
  children: [{
    name: 'child1',
    children: [{
      name: 'child1_1',
      children: [{
        name: 'child1_1_1'
      }]
    }]
  }, {
    name: 'child2',
    children: [{
      name: 'child2_1'
    }]
  }, {
    name: 'child3'
  }]
};


function traverse(node, i) {
  var children = node.children;
  if (children != null) {
    console.log("parent:" + node.name + ",child:" + children[i].name);
    if (i == children.length - 1) {
      traverse(children[0], 0);
    } else {
      traverse(node, i + 1);
    }
  }
}

traverse(data, 0);
