
function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let next = node.next;
  return collection[`${next}`];
}

function nodeAt(idx, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i=0; i<idx; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(idx, linkedList, collection) {
  if (idx === 0) {
    return linkedList;
  } else {
    let node = nodeAt(idx -1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let index = 0;
  while (currentNode !== node) {
      index++;
      currentNode = next(node, collection);
  }
  return index;
}