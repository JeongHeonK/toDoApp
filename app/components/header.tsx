import Link from "next/link";
import Image from "next/image";

import logoImg from "/public/img/Logo.png";

export default function Header() {
  return (
    <header className="h-16 p-0 border-b border-b-slate-200 bg-white">
      <ul className="list-non py-2 max-w-screen-lg mx-auto">
        <li>
          <Link href="/">
            <Image src={logoImg} alt="logo"></Image>
          </Link>
        </li>
      </ul>
    </header>
  );
}
