import { selectCores } from "@/controller/typesPokemons";
import { useRouter } from "next/router";
import { useState } from "react";

export default function GridPokemon({ data }) {
  const r = useRouter();
  const [count, setcount] = useState(2);

  return (
    <>
      <div className=" flex flex-row m-auto">
        <div className="flex-wrap  flex flex-row  m-auto pt-10 pl-14 xl:pl-7 lg:pl-2 sm:pl-0">
          {data.map((e, i) => {
            if (count >= i - 1) {
              return (
                <div
                  onClick={() => {
                    r.push("/pokemon?id=" + (i + 1));
                  }}
                  key={i}
                  className="pt-5 pb-3 bg-white h-auto w-96 rounded-xl shadow-xl ml-5 mb-5 border-vermelho_drop border-2 flex flex-col cursor-pointer lg:w-5/12 active:scale-[1.05] sm:flex-row sm:w-11/12 sm:py-5"
                >
                  <CardItem name={e.nome} link={e.img_link} tipo={e.tipo} />
                </div>
              );
            }
          })}
        </div>
      </div>
      {/*================================ */}
      {/*       BTN "Mostra mais" */}
      <div
        onClick={() => {
          setcount((e) => e + 4);
        }}
        className={`w-40 h-16 drop-shadow-xl flex flex-col m-auto mt-5 mb-10 lg:w-32 cursor-pointer select-none lg:active:scale-[1.05] ${
          count >= data.length ? "bg-slate-500" : " bg-vermelho"
        }`}
      >
        <span className="m-auto text-white">Mostrar mais</span>
      </div>
      {/*================================ */}
    </>
  );
}

function CardItem({ name = "", link = "", tipo = "" }) {
  return (
    <>
      {/*================================================== */}
      {/* Imagem do pokemon */}
      <img
        src={link.length == 0 ? "/images/pokemonDesconhecido.png" : link}
        alt=""
        className="select-none w-2/4 h-auto m-auto mt-0 mb-0 sm:w-4/12 sm:h-28 sm:m-auto sm:ml-5 sm:mr-3 smx:mr-0"
      />
      <div className="flex flex-col w-mxw content-center ">
        {/*================================================== */}
        {/* Nome do pokemon */}
        <h3 className="text-3xl font-bold font-Inter m-auto mt-3 mb-3 ml-5 ">
          {name}
        </h3>
        {/*================================================== */}
        {/* Tipo do pokemon */}
        {JSON.parse(tipo).map((e, i) => {
          console.log(e);
          return (
            <div
              key={i}
              className={`${selectCores(
                e
              )} rounded-lg w-40 h-10 flex mt-2  ml-5 lg:w-32 `}
            >
              <span className="m-auto text-white">{e}</span>
            </div>
          );
        })}

        {/*================================================== */}
      </div>
    </>
  );
}

//======================================
// Load cores
const cores = [
  "bg-vermelho",
  "bg-typePokemon_voador",
  "bg-typePokemon_fantasma",
  "bg-typePokemon_dragao",
  "bg-typePokemon_psiquico",
  "bg-typePokemon_lutador",
  "bg-typePokemon_agua",
  "bg-typePokemon_aco",
  "bg-typePokemon_eletrico",
  "bg-typePokemon_venenoso",
  "bg-typePokemon_venenoso",
  "bg-typePokemon_planta",
  "bg-typePokemon_terra",
  "bg-typePokemon_rocha",
  "bg-typePokemon_rocha",
  "bg-typePokemon_gelo",
  "bg-vermelho",
];
