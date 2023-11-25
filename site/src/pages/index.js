import Titulo from "@/components/ComponentTitulo";
import GridComponents from "@/components/gridComponents";
import GridPokemon from "@/components/gridPokemons";
import LoadScreen from "@/components/load";
import AppBar from "@/components/topbar";
import { api_config } from "@/models/api-connection";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState();
  // ========================================
  //              Chamada api
  //          Na inicialização do site
  useEffect(() => {
    if (!data) {
      try {
        api_config.get("/get-all").then((e) => {
          if (e.data.length > 0) {
            setdata(e);
          }
        });
      } catch (error) {
        setdata({});
      }
    }
  }, [data]);
  // ========================================
  return (
    <>
      <div className="flex flex-col ">
        {/* ============================= */}
        {/*     TagTitulo da pagina */}
        <Head>
          <title>Home - Pokedex</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        {/* ============================= */}
        {/*     Component appbar */}
        <AppBar state={[true, false, false]} />
        {data ? (
          <div className="m-auto w-10/12">
            {/* ============================================== */}
            {/*               Component titulo */}
            <Titulo name="Navegação" />
            {/* ============================================== */}
            {/*      Component grade de botões para */}
            {/*      acesso a site  */}
            <div className="m-auto w-8/12 xxxl:w-7/12 xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-12/12">
              <GridComponents />
            </div>

            {/* ============================================== */}
            {/*               Component titulo */}
            <Titulo name="Pokemons - todos" />
            {/* ============================================== */}
            {/*          Component Lista de pokemons */}
            <GridPokemon data={data.data} />
          </div>
        ) : (
          // ========================================
          //      Component Carregamento "LOAD"
          <LoadScreen />
        )}
      </div>
    </>
  );
}
