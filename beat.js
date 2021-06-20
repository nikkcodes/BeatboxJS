class Beat {
  constructor(val) {
    this.audio = new Audio(val);
  }
  playmusic = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

class Button {
  constructor(color, keycode) {
    this.color = color;
    this.keycode = keycode;
    this.ele = document.getElementById(keycode);
    this.activate();
    this.createTransitionEndListener();
  }
  activate = () => {
    this.ele.style.borderColor = this.color;
  };
  select = () => {
    this.ele.style.backgroundColor = this.color;
  };
  createTransitionEndListener = () => {
    this.ele.addEventListener("transitionend", () => {
      this.deselect();
    });
  };
  deselect = () => {
    this.ele.style.backgroundColor = "transparent";
    this.ele.style.boxShadow = `none`;
  };
}
