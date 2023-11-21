import AppBar from "@/components/topbar";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();
  return (
    <div className="flex flex-col ">
      <AppBar state={[false, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 flex flex-col">
        <h1 className="text-5xl m-auto mt-52 font-Inter font-bold text-vermelho">
          Pagina não encontrada
        </h1>
        <div
          onClick={() => {
            r.push("/");
          }}
          className="m-auto mt-10 bg-vermelho text-white px-14 py-5 shadow-2xl cursor-pointer active:scale-[1.05] select-none"
        >
          <span>Ir para pagina inicial</span>
        </div>
        {/* <CardInfo d={data} /> */}
      </div>
    </div>
  );
}
