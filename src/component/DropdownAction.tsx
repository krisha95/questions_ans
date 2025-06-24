"use client";
import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

export interface DropdownItem {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  divider?: boolean;
}

interface DropdownActionProps {
  items: DropdownItem[];
  toggleIcon: React.ReactNode;
  wrapperClass?: string;
  menuClass?: string;
  toggleButtonClass?: string;
}

const DropdownAction: React.FC<DropdownActionProps> = ({
  items,
  toggleIcon,
  wrapperClass = "",
  menuClass = "",
  toggleButtonClass = "btn btn-light btn-sm",
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`dropdown ${wrapperClass}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        onClick={() => setShow((prev) => !prev)}
        className={toggleButtonClass}
        aria-expanded={show}
        type="button"
      >
        {toggleIcon}
      </button>

      <Dropdown.Menu
        show={show}
        className={menuClass}
        style={{ display: show ? "block" : "none", position: "absolute", right: 0, top: "100%", zIndex: 1000 }}
      >
        {items.map((item, index) =>
          item.divider ? (
            <Dropdown.Divider key={index} />
          ) : (
            <Dropdown.Item
              key={index}
              href={item.href || "#"}
              onClick={() => {
                item.onClick?.();
                setShow(false);
              }}
            >
              {item.icon && <span className="pe-2">{item.icon}</span>}
              {item.label}
            </Dropdown.Item>
          )
        )}
      </Dropdown.Menu>
    </div>
  );
};

export default DropdownAction;
