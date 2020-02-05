const list_item = document.querySelectorAll(".list-item");

const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_item.length; i++) {
  const item = list_item[i];

  item.addEventListener("dragstart", function(ev) {
    draggedItem = item;
    setTimeout(function() {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function(ev) {
    setTimeout(function() {
      item.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", function(ev) {
      ev.preventDefault();
    });

    list.addEventListener("dragenter", function(ev) {
      ev.preventDefault();
      this.style.backgroundColor = "rgba(0,0,0,0.2)";
    });

    list.addEventListener("dragleave", function(ev) {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
    });

    list.addEventListener("drop", function(ev) {
      this.append(draggedItem);
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
  }
}
