import { IoMdArrowUp } from "react-icons/io";
import "./ScrollUp.css";
export default function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <IoMdArrowUp className="scrollup-icon" />
    </a>
  );
}
