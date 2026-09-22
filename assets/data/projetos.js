/* ============================================================
   PROJETOS NA PRÁTICA
   ------------------------------------------------------------
   É AQUI que se adiciona um card de projeto na página Atuação.

   Cada projeto precisa de uma página própria na raiz do site
   (ex.: projeto-tcdf.html). Para criar um novo: copie uma página
   de projeto existente, troque os textos e acrescente um bloco
   abaixo apontando para ela.

   Campos:
     pagina  arquivo da página do projeto
     orgao   nome do órgão (aparece no card)
     logo    arquivo dentro de assets/img/projetos/
     area    etiqueta do card
     titulo  título do card

   Para incluir: copie um bloco { ... } inteiro, cole no fim da
   lista, preencha e separe com vírgula. O último não leva vírgula.
   ============================================================ */

window.PROJETOS = [
  {
    pagina: "projeto-tcdf.html",
    orgao: "Tribunal de Contas do Distrito Federal",
    logo: "assets/img/projetos/tcdf.png",
    area: "Videoconferência",
    titulo: "Quatro modelos de sala de reunião integrados ao Microsoft Teams"
  },
  {
    pagina: "projeto-bndes.html",
    orgao: "Banco Nacional de Desenvolvimento Econômico e Social",
    logo: "assets/img/projetos/bndes.png",
    area: "Videoconferência",
    titulo: "Salas de reunião padronizadas em Microsoft Teams Rooms nas quatro localidades do banco"
  }
];
