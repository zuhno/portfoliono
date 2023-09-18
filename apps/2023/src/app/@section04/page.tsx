"use client";

import "./_styles/page.scss";

import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

const Section04 = () => {
  const ref = useRef(null);
  const _isInView = useInView(ref, { once: true });

  return (
    <div className="section-container" id="contact" ref={ref}>
      <div className="section">
        <div className="section04">
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

export default Section04;
