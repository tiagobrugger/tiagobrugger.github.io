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
     sigla   sigla do órgão (aparece na capa enquanto não houver logo)
     logo    arquivo dentro de assets/img/projetos/ (deixe "" se ainda
             não tiver o logo; a capa mostra a sigla)
     area    etiqueta do card
     titulo  título do card

   Para incluir: copie um bloco { ... } inteiro, cole no fim da
   lista, preencha e separe com vírgula. O último não leva vírgula.
   ============================================================ */

window.PROJETOS = [
  {
    pagina: "projeto-tcdf.html",
    sigla: "TCDF",
    orgao: "Tribunal de Contas do Distrito Federal",
    logo: "assets/img/projetos/tcdf.png",
    area: "Videoconferência",
    titulo: "Quatro modelos de sala de reunião integrados ao Microsoft Teams"
  },
  {
    pagina: "projeto-bndes.html",
    sigla: "BNDES",
    orgao: "Banco Nacional de Desenvolvimento Econômico e Social",
    logo: "assets/img/projetos/bndes.png",
    area: "Videoconferência",
    titulo: "Salas de reunião padronizadas em Microsoft Teams Rooms nas quatro localidades do banco"
  },
  {
    pagina: "projeto-tjpa.html",
    sigla: "TJPA",
    orgao: "Tribunal de Justiça do Estado do Pará",
    logo: "assets/img/projetos/tjpa.png",
    area: "Telefonia",
    titulo: "Telefonia de mesa integrada ao Microsoft Teams"
  },
  {
    pagina: "projeto-caesb.html",
    sigla: "CAESB",
    orgao: "Companhia de Saneamento Ambiental do Distrito Federal",
    logo: "assets/img/projetos/caesb.png",
    area: "Telefonia",
    titulo: "Telefonia IP padronizada para toda a companhia"
  },
  {
    pagina: "projeto-trt9.html",
    sigla: "TRT9",
    orgao: "Tribunal Regional do Trabalho da 9ª Região",
    logo: "assets/img/projetos/trt9.png",
    area: "Telefonia",
    titulo: "Renovação da telefonia IP com registro de preços"
  },
  {
    pagina: "projeto-pgjma.html",
    sigla: "PGJ-MA",
    orgao: "Procuradoria-Geral de Justiça do Maranhão",
    logo: "assets/img/projetos/pgjma.png",
    area: "Telefonia",
    titulo: "Telefonia IP em escala para o Ministério Público"
  }
];
