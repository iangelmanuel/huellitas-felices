import clsx from 'clsx'
import { navItems } from '@/data/navigation-data'

export default function NavItems() {
  const pathname = window.location.pathname
  return (
    <section>
      <ul className="flex gap-5 text-xs text-zinc-500 font-bold uppercase">
        {navItems.map(item => (
          <li
            key={item.id}
            className={clsx(
              "hover:text-hf hover:scale-110 transition-all delay-150",
              pathname === item.href
                ? 'border-b-2 border-hf'
                : 'border-b-2 border-transparent'
            )}
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
