'use client'

import { useRouter } from "next/navigation";

const NavButton = () => {
  const router = useRouter();
  return(
    <button
      type="button"
      onClick={() => router.push('/')}>Take Me back to Home</button>
  )
}
export default NavButton;