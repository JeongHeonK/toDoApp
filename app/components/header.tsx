import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 p-0 border-b border-b-slate-200 bg-white">
      <ul className="list-non py-2 max-w-screen-lg mx-auto h-full">
        <li className="h-full">
          <Link href="/" className="h-full">
            <div className="h-full w-40 bg-logo-sm md:bg-logo bg-no-repeat bg-left"></div>
          </Link>
        </li>
      </ul>
    </header>
  );
}
