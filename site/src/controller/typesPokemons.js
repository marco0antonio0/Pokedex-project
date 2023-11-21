export function selectCores(name) {
  switch (name) {
    case "Fogo":
      console.log("fogo");

      return "bg-vermelho";

    case "Voador":
      return "bg-typePokemon_voador";

    case "Fantasma":
      return "bg-typePokemon_fantasma";

    case "Dragão":
      return "bg-typePokemon_dragao";

    case "Psíquico":
      return "bg-typePokemon_psiquico";

    case "Lutador":
      return "bg-typePokemon_lutador";

    case "Água":
      return "bg-typePokemon_agua";

    case "Aço":
      return "bg-typePokemon_aco";

    case "Elétrico":
      return "bg-typePokemon_eletrico";

    case "Veneno":
      return "bg-typePokemon_venenoso";
    case "Venenoso":
      return "bg-typePokemon_venenoso";

    case "Planta":
      return "bg-typePokemon_planta";

    case "Terra":
      return "bg-typePokemon_terra";
    case "Rocha":
      return "bg-typePokemon_rocha";
    case "solo":
      return "bg-typePokemon_rocha";

    case "Gelo":
      return "bg-typePokemon_gelo";

    default:
      return "bg-vermelho";
  }
}
