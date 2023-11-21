import CardInfo from "@/components/CardInfo";
import GridPokemon from "@/components/gridPokemons";
import LoadScreen from "@/components/load";
import AppBar from "@/components/topbar";
import { api_config } from "@/models/api-connection";
import Convert_data from "@/models/convert_dados";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState();
  const r = useRouter();
  const { id } = r.query;
  // ========================================
  //              Chamada api
  //          Na inicialização do site
  useEffect(() => {
    if (!data && id) {
      try {
        api_config.get("/get-one?id=" + id).then((e) => {
          //========================================
          //   faz a conversão de dados obtidos
          //   chamada api
          var temp = Convert_data({ d: e.data[0] });
          //========================================
          //   caso a variavel TEMP retorne null
          //   redirecioene para pagina 404
          if (!temp) {
            r.push("404");
          }
          setdata(temp);
        });
      } catch (error) {
        //========================================
        //   redirecioene para pagina 404
        //   em caso de erro na chamada api
        setdata({});
        r.push("404");
      }
    }
  }, [data, id]);
  return (
    <div className="flex flex-col ">
      {/* ============================= */}
      {/*     TagTitulo da pagina */}
      <Head>
        <title>Pokemon - Pokedex</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {/* ============================= */}
      {/*     Component appbar */}
      <AppBar state={[false, false, false]} />
      {data ? (
        <div className="m-auto w-8/12 xxxl:w-10/12">
          {/* ================================================== */}
          {/*  Component cartão de informações do pokemon */}
          <CardInfo d={data} />
        </div>
      ) : (
        // ========================================
        //      Component Carregamento "LOAD"
        <LoadScreen />
      )}
    </div>
  );
}
