import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import Titulo from "@/components/ComponentTitulo";
import SectionText from "@/components/sectionText";
import Head from "next/head";

export default function Home() {
  const textmarkdown = `
\\
No âmbito da disciplina "Back-end", o desenvolvedor estudante Marco A. da S. Mesquita foi desafiado pelo professor Antonio Lobato a desenvolver um projeto que não apenas destacasse suas competências técnicas, mas também contribuísse de maneira significativa para a aplicação prática dos conceitos aprendidos em sala de aula.

Comprometido com a excelência, Marco uniu forças com Alexsandro F. Nascimento, especialista em web design, Beatriz S. Lisboa, profissional talentosa com conhecimentos aprofundados em design, e também contribuiu como Desenvolvedor Fullstack. A equipe concebeu a visão de uma plataforma educacional inovadora - a Pokedex.
\\
\\
Na etapa subsequente, Marco, agora acompanhado por Jean A. Dias, especialista em modelagem de banco de dados, canalizou esforços para garantir a robustez da infraestrutura do projeto. A eficiência e a integridade do banco de dados tornaram-se elementos cruciais para o sucesso da Pokedex.
\\
\\
Em um contexto paralelo, o grupo foi desafiado pelo professor Antonio Lobato a criar uma aplicação back-end utilizando uma API e banco de dados. A proposta consistia em desenvolver uma API que consultasse um banco de dados contendo informações sobre Pokémon. Com o tema escolhido pelo grupo sendo "Pokedex", a equipe direcionou seus esforços para criar uma aplicação que integrasse de maneira eficiente as informações dos Pokémon, proporcionando uma experiência completa aos usuários.
\\
\\
Além disso, Alexsandro F. Nascimento e Jean A. Dias foram responsáveis pela documentação do projeto, garantindo que todos os processos, decisões e implementações fossem registrados de maneira clara e abrangente.
\\
\\
A plataforma começou a tomar forma, integrando uma interface amigável, recursos avançados e um sistema de atualizações contínuas via API. Cada membro da equipe contribuiu com sua expertise única, enfrentando desafios técnicos com determinação e resiliência. A Pokedex não apenas atendeu aos requisitos acadêmicos, mas também proporcionou uma aplicação prática e funcional, unindo os mundos do front-end e back-end de maneira coesa.`;

  const creditos = [
    `## **Desenvolvedor**
- Marco A. da S. Mesquita
`,
    `## **Web Design**
- Alexsandro F. Nascimento
- Beatriz S. Lisboa
- Marco A. da S. Mesquita`,
    `## **Modelagem Banco de Dados**
- Marco A. da S. Mesquita
- Jean A. Dias    
`,
    `## **Documentação**
- Alexsandro F. Nascimento
- Jean A. Dias    
`,
  ];
  return (
    <div className="flex flex-col">
      {/* ============================= */}
      {/*     TagTitulo da pagina */}
      <Head>
        <title>Sobre - Pokedex</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, true, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 mb-20">
        <Titulo name="Sobre nos" />
        <ImageCard />
        <SectionText text={textmarkdown} />
        <Titulo name="Participantes do projeto" />
        <ImageCard img1="/images/art2.png" img2="/images/art2_responsive.png" />
        <SectionText text={creditos[0]} />
        <br />
        <SectionText text={creditos[1]} />
        <br />
        <SectionText text={creditos[2]} />
        <br />
        <SectionText text={creditos[3]} />
      </div>
    </div>
  );
}
