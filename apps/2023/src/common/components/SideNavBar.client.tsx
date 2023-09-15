"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";

import { ETheme, useTheme } from "@common/contexts/ThemeProvider";

const SideNavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const { changeTheme } = useTheme();

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

  const initObserver = () => {
    const infoEl = document.getElementById("#info");
    const mapEl = document.getElementById("#map");
    const contactEl = document.getElementById("#contact");

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.9 });

    if (infoEl && mapEl && contactEl) {
      observer.observe(infoEl);
      observer.observe(mapEl);
      observer.observe(contactEl);
    }

    return observer;
  };

  const onToggleTheme = () => {
    const prevTheme = localStorage.getItem("theme");

    let newTheme = ETheme.DARK;
    if (prevTheme === ETheme.DARK) newTheme = ETheme.LIGHT;

    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("class", newTheme);
    changeTheme(newTheme);
  };

  const initTheme = () => {
    let theme = localStorage.getItem("theme") as ETheme | null;

    if (!theme) {
      theme = ETheme.DARK;
      if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = ETheme.LIGHT;
      localStorage.setItem("theme", theme);
    }

    document.body.setAttribute("class", theme);
    changeTheme(theme);
  };

  useEffect(() => {
    initTheme();
    const observer = initObserver();

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

      <div className="toggle-theme">
        <button onClick={onToggleTheme} type="button">
          <BsSunFill />
          <BsMoonFill />
        </button>
      </div>
    </nav>
  );
};

export default SideNavBar;
