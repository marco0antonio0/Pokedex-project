import { selectCores } from "@/controller/typesPokemons";

export default function CardInfo({ d }) {
  return (
    <>
      <div className="flex flex-row mt-20 mb-5 gap-5 lg:flex-col lg:mt-5">
        {/* ======================================================================= */}
        <div className="bg-vermelho_drop w-1/3 h-auto flex flex-col py-20 rounded-2xl lg:w-mxw lg:h-56 lg:py-0 ">
          {/* ===================================== */}
          {/*       imagem do pokemon */}
          <img
            src="/images/pokemonDesconhecido.png"
            alt=""
            className="m-auto px-20 lg:w-80"
          />
        </div>
        {/* ======================================================================= */}
        <div className="  w-2/3 h-auto flex flex-col lg:w-mxw lg:pb-10 font-Inter">
          {/* ===================================== */}
          {/*           Nome do pokemon */}
          <h1 className="m-auto text-3xl font-bold mb-5">{d.nome}</h1>
          {/* ======================================================================= */}
          {/* Div informações gerais */}
          <div className="bg-vermelho_drop rounded-2xl pt-5 pb-20">
            <div className=" flex flex-col w-mxw  m-auto mt-0  pl-5 text-white">
              {/*======================================= */}
              {/*           infos gerais */}
              <h1 className="text-2xl font-bold mt-5 ">SOBRE</h1>
              <p className="text-xl font-normal mt-5 ">
                Altura: {d.altura}
                <br />
                Peso: {d.peso}
                <br />
                Tipo: {d.tipo ? d.tipo : ""}
                <br />
                Evolução: {d.evolucao ? d.evolucao : "desconhecida"}
              </p>
              <p className="text-xl font-normal m-auto mt-5 ">
                É um dos Pokémons muito bom, sua evolução é muito forte. O seu
                tipo é{" "}
                {!d.tipo ? null : d.tipo.map((e, i) => (i == 0 ? e : null))} e{" "}
                {!d.tipo ? null : d.tipo.map((e, i) => (i == 1 ? e : null))},
                pode alterar dependendo da sua emoção.
              </p>
              {/*================================================== */}
            </div>
          </div>
          {/*================================================== */}
          {/*================================================== */}
          <div className="flex flex-row flex-wrap mt-10 gap-5 md:flex-col md:items-start">
            {/*================================================== */}
            {/*               Tipo do pokemon */}
            <div className="flex flex-col border-l-4 border-vermelho_drop pl-5">
              <h1 className="text-center text-2xl font-bold m-auto mb-2 mt-5 ">
                Tipo
              </h1>
              {d.tipo
                ? d.tipo.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={`${selectCores(
                          e
                        )} rounded-lg w-40 m-auto h-10 flex mt-2  ml-5 lg:w-32 `}
                      >
                        <span className="m-auto text-white">{e}</span>
                      </div>
                    );
                  })
                : null}
            </div>
            {/*================================================== */}
            {/*               Fraquezas do pokemon */}
            <div className="flex flex-col border-l-4 border-vermelho_drop pl-5 ">
              <h1 className="text-center text-2xl font-bold mt-5 m-auto mb-2">
                Fraquezas
              </h1>
              {d.fraquezas
                ? d.fraquezas.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={`${selectCores(
                          e
                        )} rounded-lg w-40 m-auto h-10 flex mt-2  ml-5 lg:w-32 `}
                      >
                        <span className="m-auto text-white">{e}</span>
                      </div>
                    );
                  })
                : null}
            </div>
            {/*================================================== */}
            {/*               Habildades do pokemon */}
            <div className="flex flex-col border-l-4 border-vermelho_drop pl-5">
              <h1 className="text-center text-2xl font-bold mt-5 m-auto mb-2 ">
                Habilidades
              </h1>
              {d.habilidades
                ? d.habilidades.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={`bg-vermelho rounded-lg w-40 m-auto h-10 flex mt-2  ml-5 lg:w-32 `}
                      >
                        <span className="m-auto text-white">{e}</span>
                      </div>
                    );
                  })
                : null}
            </div>
            {/*================================================== */}
          </div>
        </div>
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
