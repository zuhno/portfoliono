"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";

const SideNavBar = () => {
  const [activeTab, setActiveTab] = useState("");

  const toNav = (id: string) => {
    const mainEl = document.querySelector("main");
    const targetEl = document.getElementById(id);
    mainEl?.scrollTo({ top: targetEl?.offsetTop, behavior: "smooth" });
  };

  const handleIntersect = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const infoEl = document.getElementById("#info");
    const mapEl = document.getElementById("#map");
    const contactEl = document.getElementById("#contact");

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.9 });

    if (infoEl && mapEl && contactEl) {
      observer.observe(infoEl);
      observer.observe(mapEl);
      observer.observe(contactEl);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <ul>
        <li className={clsx(activeTab === "#info" && "active")}>
          <RiHome5Fill onClick={() => toNav("#info")} />
        </li>
        <li className={clsx(activeTab === "#map" && "active")}>
          <FaMapLocationDot onClick={() => toNav("#map")} />
        </li>
        <li className={clsx(activeTab === "#contact" && "active")}>
          <MdContactSupport onClick={() => toNav("#contact")} />
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
