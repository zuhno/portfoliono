"use client";

import "./_styles/page.scss";

import Link from "next/link";
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

const Section03 = () => {
  return (
    <div className="section-container" id="contact">
      <div className="section">
        <div className="section03">
          {/* eslint-disable-next-line @next/next/no-img-element -- . */}
          <img alt="armature" src="/image/armature_bye.png" />

          <div className="contact">
            <div className="title">Contact</div>
            <ul>
              <li>
                <Link href="https://github.com/cuttleman" target="_blank">
                  <BiLogoGithub />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/juno-lee-95139a255" target="_blank">
                  <BiLogoLinkedinSquare />
                </Link>
              </li>
              <li>
                <a href="mailto:silluat11@gmail.com" rel="noreferrer" target="_blank">
                  <BiLogoGmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
