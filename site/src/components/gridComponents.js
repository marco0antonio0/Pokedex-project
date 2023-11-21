import { useRouter } from "next/router";

export default function GridComponents() {
  return (
    <>
      <div className="sm:hidden flex mt-10">
        <Layout_desktop />
      </div>
      <div className="sm:flex hidden mt-5">
        <Layout_smartphone />
      </div>
    </>
  );
}
function Layout_smartphone() {
  const r = useRouter();
  return (
    <>
      <div className="h-auto w-mxw">
        {/*=================== */}
        {/* item 1 */}
        <img
          onClick={() => r.push("/sobre")}
          src="/images/componente_grid1_responsive.svg"
          alt=""
          className="w-mxw cursor-pointer select-none active:scale-[1.05]"
        />
        {/*=================== */}
        {/* item 2 */}
        <img
          onClick={() =>
            r.push("https://github.com/marco0antonio0/Pokedex-project")
          }
          src="/images/componente_grid2_responsive.svg"
          alt=""
          className="w-mxw cursor-pointer select-none active:scale-[1.05]"
        />
        {/*=================== */}
        {/* item 3 */}
        <img
          onClick={() => r.push("/pokemon/sort")}
          src="/images/componente_grid3_responsive.svg"
          alt=""
          className="w-mxw cursor-pointer select-none active:scale-[1.05]"
        />
        {/*=================== */}
      </div>
    </>
  );
}

function Layout_desktop() {
  const r = useRouter();
  return (
    <>
      <div className="flex flex-row m-auto mt-0 gap-5">
        {/*====================================== */}
        <div className="w-1/2 flex flex-col m-auto mr-0 h-auto ">
          {/*=================== */}
          {/* item 1 */}
          <img
            onClick={() => r.push("/sobre")}
            src="/images/componente_grid1.svg"
            alt=""
            className="h-1/2 flex flex-row content-center items-center align-middle cursor-pointer select-none m-auto mr-0 active:scale-[1.05]"
          />
          {/*=================== */}
          {/* item 2 */}
          <img
            onClick={() =>
              r.push("https://github.com/marco0antonio0/Pokedex-project")
            }
            src="/images/componente_grid2.svg"
            alt=""
            className="h-1/2 flex flex-row content-center items-center align-middle cursor-pointer select-none m-auto mr-0 active:scale-[1.05]"
          />
          {/*=================== */}
        </div>
        {/*====================================== */}
        <div className="flex flex-col w-1/2 m-auto ml-0 h-auto">
          {/*=================== */}
          {/* item 3 */}
          <img
            onClick={() => r.push("/pokemon/sort")}
            src="/images/componente_grid3.svg"
            alt=""
            className="items-center content-center flex flex-row cursor-pointer select-none m-auto ml-0 h-mxh active:scale-[1.05]"
          />
          {/*=================== */}
        </div>
        {/*====================================== */}
      </div>
    </>
  );
}
