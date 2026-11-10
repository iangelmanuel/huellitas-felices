import clsx from "clsx"
import { navItems } from "../../data/navigation-data"

export default function NavItems() {
  const pathname = window.location.pathname
  return (
    <section className="hidden lg:block">
      <ul className="flex gap-5 text-xs font-bold text-zinc-500 uppercase">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "transition-all delay-150 hover:scale-110 hover:text-hf",
              pathname === item.href
                ? "border-b-2 border-hf"
                : "border-b-2 border-transparent"
            )}
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
