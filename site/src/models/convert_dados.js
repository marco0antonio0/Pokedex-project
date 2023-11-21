export default function Convert_data({ d }) {
  try {
    var tipo = JSON.parse(d.tipo);
    var fraquezas = JSON.parse(d.fraquezas);
    var habilidades = JSON.parse(d.habilidades);
    var temp = {
      altura: d.altura,
      evolucao: d.evolucao,
      fraquezas: fraquezas,
      habilidades: habilidades,
      tipo: tipo,
      id: d.id,
      nome: d.nome,
      peso: d.peso,
    };
    return temp;
  } catch (error) {
    var temp = null;
    return temp;
  }
}
