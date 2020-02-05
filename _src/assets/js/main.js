/* "use strict"; */

const list_items = document.querySelectorAll(".list-items");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function(e) {
    console.log("dragstart");
    draggedItem = this;
  });

  item.addEventListener("dragend", function() {
    console.log("dragend");
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];
  }
}
