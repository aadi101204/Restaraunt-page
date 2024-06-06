export default function home(cl, content) {
  var node = document.createElement("div");
  node.innerHTML = content;
  node.className = cl;
  return node;
}
