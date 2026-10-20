/* ============================================================
   PROJETOS NA PRÁTICA
   ------------------------------------------------------------
   É AQUI que se adiciona um card de projeto na página Atuação.
   O rodapé de todas as páginas mostra os 4 projetos mais recentes
   (pelo campo ano) e se atualiza sozinho.

   Cada projeto precisa de uma página própria na raiz do site
   (ex.: projeto-tcdf.html). Para criar um novo: copie uma página
   de projeto existente, troque os textos e acrescente um bloco
   abaixo apontando para ela.

   Campos:
     pagina  arquivo da página do projeto
     ano     ano do processo (ordena o rodapé, do mais recente)
     rodape  texto curto do rodapé (ex.: "TCDF · Salas Teams")
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
    ano: "2025",
    rodape: "TCDF · Salas Teams",
    sigla: "TCDF",
    orgao: "Tribunal de Contas do Distrito Federal",
    logo: "assets/img/projetos/tcdf.png",
    area: "Videoconferência",
    titulo: "Quatro modelos de sala de reunião integrados ao Microsoft Teams"
  },
  {
    pagina: "projeto-bndes.html",
    ano: "2026",
    rodape: "BNDES · Salas Teams",
    sigla: "BNDES",
    orgao: "Banco Nacional de Desenvolvimento Econômico e Social",
    logo: "assets/img/projetos/bndes.png",
    area: "Videoconferência",
    titulo: "Salas de reunião padronizadas em Microsoft Teams Rooms (MTR) nas quatro localidades do banco"
  },
  {
    pagina: "projeto-tjpa.html",
    ano: "2024",
    rodape: "TJPA · Telefones Teams",
    sigla: "TJPA",
    orgao: "Tribunal de Justiça do Estado do Pará",
    logo: "assets/img/projetos/tjpa.png",
    area: "Telefonia",
    titulo: "Telefonia de mesa integrada ao Microsoft Teams"
  },
  {
    pagina: "projeto-caesb.html",
    ano: "2025",
    rodape: "CAESB · Telefones IP",
    sigla: "CAESB",
    orgao: "Companhia de Saneamento Ambiental do Distrito Federal",
    logo: "assets/img/projetos/caesb.png",
    area: "Telefonia",
    titulo: "Telefonia IP padronizada para toda a companhia"
  },
  {
    pagina: "projeto-trt9.html",
    ano: "2024",
    rodape: "TRT9 · Telefones IP",
    sigla: "TRT9",
    orgao: "Tribunal Regional do Trabalho da 9ª Região",
    logo: "assets/img/projetos/trt9.png",
    area: "Telefonia",
    titulo: "Renovação da telefonia IP com registro de preços"
  },
  {
    pagina: "projeto-pgjma.html",
    ano: "2026",
    rodape: "PGJ-MA · Telefones IP",
    sigla: "PGJ-MA",
    orgao: "Procuradoria-Geral de Justiça do Maranhão",
    logo: "assets/img/projetos/pgjma.png",
    area: "Telefonia",
    titulo: "2.000 telefones IP para a migração do Ministério Público para PABX em nuvem"
  }
];
