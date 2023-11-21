import { useRouter } from "next/router";
import { useState } from "react";

export default function AppBar({ state = [false, false, false] }) {
  const [menu, setmenu] = useState(false);
  const r = useRouter();
  return (
    <>
      <div className="lg:h-24 w-mxw h-28 bg-white drop-shadow-md flex flex-row align-middle items-center content-center">
        {/*================================================ */}
        {/*           Logos */}
        <img
          src="/images/logos.svg"
          alt=""
          className="absolute h-16 w-auto m-auto ml-10 mr-0 sm:h-1/2"
        />
        {/*================================================ */}
        {/* Div de opções  */}
        <div className="flex flex-row  m-auto gap-20 lg:mr-20 md:hidden select-none">
          <h3
            onClick={() => r.push("/")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer ${
              !state[0] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            Home
          </h3>
          <h3
            onClick={() => r.push("/sobre")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer  ${
              !state[1] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            sobre
          </h3>
          <h3
            onClick={() =>
              r.push("https://github.com/marco0antonio0/Pokedex-project")
            }
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer  ${
              !state[2] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            github
          </h3>
        </div>
        {/*================================================ */}
        {/*                   DROPMENU */}
        {/*             Icon Menu Dropdown */}
        <img
          onClick={() => {
            setmenu(menu ? false : true);
          }}
          src="/images/Menus.svg"
          alt=""
          className="md:flex sm:right-10 h-3/7 hidden absolute pt-2 right-20 cursor-pointer active:scale-[1.05] select-none"
        />
        {/*==================================================================================== */}
        {/*                   DROPMENU */}
      </div>
      <div className="md:flex hidden  absolute  right-0 top-24">
        <div
          className={`flex-col h-auto w-auto select-none  bg-white rounded-lg mt-2 mr-5 p-10 pt-2 pb-4 drop-shadow-sm border-4 border-vermelho_drop ${
            !menu ? "hidden" : "flex"
          }`}
        >
          <h3
            onClick={() => r.push("/")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05] ${
              !state[0] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            Home
          </h3>
          <h3
            onClick={() => r.push("/sobre")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05]  ${
              !state[1] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            sobre
          </h3>
          <h3
            onClick={() =>
              r.push("https://github.com/marco0antonio0/Pokedex-project")
            }
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05]  ${
              !state[2] ? "text-vermelho_drop" : "text-vermelho"
            } `}
          >
            github
          </h3>
        </div>
      </div>
    </>
  );
}
