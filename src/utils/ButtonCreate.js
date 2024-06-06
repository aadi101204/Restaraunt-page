export default function create(buttonClass, displayText, linktopage) {
  var node = document.createElement("button");
  node.innerHTML = displayText;
  node.className = buttonClass;
  return node;
}
