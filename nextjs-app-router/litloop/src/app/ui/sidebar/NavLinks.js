import { 
  HomeIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  CubeTransparentIcon, RectangleStackIcon, CogIcon, TruckIcon,Squares2X2Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

const links = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {name: 'Books', href: '/store', icon: BookOpenIcon},
  {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
  {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
  {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},
  {name: 'Community', href: '/store/community', icon: UserGroupIcon},
  {name: 'Settings', href: '/store/settings', icon: CogIcon},
  {name: 'About', href: '/store/about', icon: Squares2X2Icon},
  {name: 'Admin', href: '/store/admin', icon: CubeTransparentIcon},
]

const NavLinks = () => {
  return(
    <>
    {
      links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link 
            key={link.name}
            href = {link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <IconComponent className="w-6"/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })
    }
    </>
  )
}

export default NavLinks;