// 一般从数据库取出list结构数据,按照一定规则拼装成树形结构
var data = [{
  "id": 67,
  "pid": 0,
  "name": "big",
  "level": 1,
  "status": 0
}, {
  "id": 68,
  "pid": 67,
  "name": "md",
  "level": 2,
  "status": 0
}, {
  "id": 69,
  "pid": 67,
  "name": "sdfsdfsfds",
  "level": 2,
  "status": 1
}, {
  "id": 70,
  "pid": 68,
  "name": "smss",
  "level": 3,
  "status": 1
}, {
  "id": 71,
  "pid": 0,
  "name": "big2",
  "level": 1,
  "status": 1
}, {
  "id": 72,
  "pid": 71,
  "name": "smm",
  "level": 2,
  "status": 1
}, {
  "id": 73,
  "pid": 71,
  "name": "smmm2",
  "level": 2,
  "status": 1
}, {
  "id": 74,
  "pid": 72,
  "name": "smmm2",
  "level": 3,
  "status": 1
}, {
  "id": 75,
  "pid": 69,
  "name": "sdfsdf",
  "level": 3,
  "status": 1
}, {
  "id": 76,
  "pid": 68,
  "name": "sdfsdf",
  "level": 3,
  "status": 1
}];

var tree = {};

/**
 * 构造树
 * @param  {[type]} nodes [description]
 * @return {[type]}       [description]
 */
function initTree(data) {
  var map = {},
    roots = [];

  var nodes = data.sort(function(a, b) {
    return a.level - b.level;
  });

  nodes.forEach(function(node, index) {
    node.childrenList = [];
    map[node.id] = index;
    if (node.parentId) {
      nodes[map[node.parentId.toString()]].childrenList.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

/**
 * 遍历树
 * @return {[type]} [description]
 */
function traverseTree() {
  traverse(tree, 0);
}

function traverse(node, i) {
  var children = node.children;
  if (children != null) {
    window.alert("parent:" + node.name + ",child:" + children[i].name);
    if (i == children.length - 1) {
      traverse(children[0], 0);
    } else {
      traverse(node, i + 1);
    }
  }
}

module.exports = tree;
