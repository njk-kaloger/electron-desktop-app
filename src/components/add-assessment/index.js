const { BrowserWindow } = require("electron").remote;
const path = require("path");

const addGameBtn = document.getElementById("add-game-button");

addGameBtn.addEventListener("click", event => {
  const modalPath = path.join("file://", __dirname, "../add-game/index.html");
  let win = new BrowserWindow({ width: 400, height: 320 });

  win.on("close", () => {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
