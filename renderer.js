const setButton = document.getElementById("btn");
const titleInput = document.getElementById("title");

const openFileButton = document.getElementById("btnOpenFile");
const filePathElement = document.getElementById("filePath");

const counter = document.getElementById("counter");

setButton.addEventListener("click", () => {
  const title = titleInput.value;

  window.electronAPI.setTitle(title);
});

openFileButton.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();

  filePathElement.innerHTML = filePath || "";
});

window.electronAPI.onUpdateCounter((_event, value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;

  counter.innerText = newValue;

  _event.sender.send("counter-value", newValue);
});
