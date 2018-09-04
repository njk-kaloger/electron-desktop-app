const { BrowserWindow } = require("electron").remote;
const path = require("path");

const addGameBtn = document.getElementById("add-assessment-button");

addGameBtn.addEventListener("click", event => {
  const modalPath = path.join(
    "file://",
    __dirname,
    "../add-assessment/index.html"
  );
  let win = new BrowserWindow({ width: 800, height: 500 });

  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
