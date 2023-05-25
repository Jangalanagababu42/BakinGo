import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-header">
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#de2163" }} /> by
          Jangala Nagababu{" "}
        </div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a
              class="link2"
              href="https://github.com/Jangalanagababu42"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          {/* <li class="list-item-inline"><a class="link2" href="https://www.linkedin.com/in/jangala-nagababu-0552181a4
                " target="_blank"><img class="image" src="./img/linkedin.gif" alt="linkedin" ></a></li>
            <li class="list-item-inline"><a class="link2" href="https://twitter.com/Jangalanagabab2" target="_blank"><img  class="image" src="./img/twitter.gif" alt="twitter"></a></li> */}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
