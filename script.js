//main ui
sndcnvs = document.getElementById("sand-canvas");
bgmain = document.getElementById("background");
uibuttons = document.getElementById("ui");
uibuttons.style.backgroundColor = "#404040"
sndcnvs.style.backdropFilter = "invert(1)"
bgmain.style.backgroundColor = "#1f1f1f"
for (const child of uibuttons.children) { // buttons
  if (child.tagName = "button"){
      child.style.backgroundColor = "#404040"
      child.style.color = "white"
  }
}
