"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Modal = ({ children, bg }) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div>
      {bg && <Link href="/" className={`modal ${bg}`} scroll={false} />}
      {children}

      {
        // children
      }
    </div>
  );
};

export default Modal;
