import { CloseHamburgerIcon } from "../../icons/CloseHamburgerIcon";
import { navItems } from "../../data/navigation-data";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
  setIsOpen: (prevState: boolean) => void;
}

export const HamburgerContent = ({ isOpen, setIsOpen }: Props) => {
  const pathname = window.location.pathname;
  return (
    <div>
      <div className="p-10 flex justify-between">
        <section className="flex gap-2 items-center">
          <img
            src="https://res.cloudinary.com/di85cn64g/image/upload/v1710812893/Logo_sin_nombre_ogjfcx.png"
            alt="Logo de Huellitas Felices"
            className="w-12 object-cover"
          />
          <h1 className="font-bold">
            <span className="text-hf">Huellitas</span> Felices
          </h1>
        </section>

        <section className="" onClick={() => setIsOpen(false)}>
          <CloseHamburgerIcon />
        </section>
      </div>

      <section className="px-10">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 py-6"
            onClick={() => setIsOpen(false)}
          >
            <a
              href={item.href}
              className={clsx(
                "text-lg",
                pathname === item.href ? "text-hf underline" : "text-gray-600",
              )}
            >
              {item.text}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
