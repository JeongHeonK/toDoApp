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

/**
 * GNB 역할을 담당하는 컴포넌트 입니다.
 * 로고 클릭 시, 홈으로 이동합니다.
 * 반응형 디자인으로 폭이 줄어들면 로고가 변합니다.
 */
