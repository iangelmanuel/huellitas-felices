import { useState } from "react";
import { HamburgerIcon } from "../../icons/HamburgerIcon";
import { HamburgerContent } from "./HamburgerContent";
import clsx from "clsx";

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerIcon />
      </section>

      <div
        className={clsx(
          "fixed top-0 right-0 min-h-screen bg-white shadow-2xl transition-all delay-150 duration-500",
          isOpen ? "w-[75%] md:w-[45%]" : "w-0",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerContent isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
