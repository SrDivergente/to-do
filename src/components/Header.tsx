import { Icon } from "./icons";

export function Header() {
  return (
    <header className="border-b bg-gray-900 sticky top-0 flex items-center justify-around border-slate-800">
      <div className="flex items-end gap-2">
        <Icon />
        <h1 className="font-bold text-4xl uppercase text-gray-200">Rails</h1>
      </div>
      <div className="">
        <ul className="flex">
          <li className="m-2  transition-all">
            <a className=" hover:border-b cursor-pointer border-pink-600 p-4">
              Home
            </a>
          </li>
          <li className="m-2">
            <a className=" hover:border-b cursor-pointer border-pink-600 p-4">
              About
            </a>
          </li>
          <li className="m-2">
            <a className=" hover:border-b cursor-pointer border-pink-600 p-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
