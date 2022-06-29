import { Link } from "react-router-dom";

export function Card() {
  return (
    <div className="w-96 rounded m-auto mt-10 group  ">
      <Link to="/todo" className="">
        <header className=" border-pink-500 border-b bg-slate-700 text-gray-300 h-40 flex align-and items-end font-bold p-3 rounded-t  bg-cover bg-[url('https://usercontent.one/wp/cupcake.nilssonlee.se/wp-content/uploads/2021/07/129A5196-scaled.jpg')] ">
          <h1 className="">List To-do</h1>
        </header>
        <div className="bg-gray-700  p-4 group-hover:bg-gray-800 transition-colors text-gray-300 rounded-b">
          <span className="text-gray-100">To-list Question</span>
          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel est nibh. Nunc aliquet accumsan dui, id interdum justo tempus
            pretium.
          </p>
        </div>
      </Link>
    </div>
  );
}
