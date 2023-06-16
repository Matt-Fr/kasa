"use client";
import React, { useState } from "react";

interface CollapseProps {
  title: string;
  info: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState<boolean>(true);

  return (
    <article>
      <header>
        <h4>{title}</h4>
        {/* <button></button> */}
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Collapse;
