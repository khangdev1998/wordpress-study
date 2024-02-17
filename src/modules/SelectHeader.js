class SelectHeader {
  constructor() {
    this.selectHeader = document.querySelector("#header");
    if (this.selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 100
          ? this.selectHeader.classList.add("sticked")
          : this.selectHeader.classList.remove("sticked");
      });
    }
  }
}

export default SelectHeader;
