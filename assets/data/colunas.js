/* ============================================================
   COLUNAS DE OPINIÃO
   ------------------------------------------------------------
   É AQUI que se adiciona uma coluna à página Opinião, à home e
   à página Atuação (as duas últimas mostram as 2 mais recentes).

   Cada coluna precisa de uma página própria na raiz do site
   (ex.: opiniao-licitacao-vida-em-sociedade.html). Para criar uma
   nova: copie uma página de coluna existente, troque título,
   textos, datas e o JSON-LD, acrescente um bloco abaixo, inclua a
   página no sitemap.xml e o link na coluna "Colunas de opinião"
   do rodapé.

   Campos:
     pagina     arquivo da página da coluna
     titulo     título completo (o mesmo do H1 da página)
     categoria  uma das 4 categorias oficiais: Licitações,
                Tecnologia Pública, Itanhaém, Reflexões
     data       AAAA-MM-DD (ordena da mais recente para a mais antiga)
     resumo     uma ou duas frases para o card

   O último bloco não leva vírgula.
   ============================================================ */

window.COLUNAS = [
  {
    pagina: "opiniao-licitacao-vida-em-sociedade.html",
    titulo: "Licitação não é assunto de órgão público. É assunto de vida em sociedade.",
    categoria: "Licitações",
    data: "2026-09-24",
    resumo: "Uma obra parada em Itanhaém mostra por que entender o processo licitatório muda a forma de escolher representantes e cobrar resultados."
  },
  {
    pagina: "opiniao-menor-preco-nao-e-economia.html",
    titulo: "O menor preço, sozinho, não é economia para a instituição pública.",
    categoria: "Tecnologia Pública",
    data: "2026-09-24",
    resumo: "Comprar o equipamento mais barato para a sala de videoconferência costuma sair caro. Economicidade começa no estudo técnico, não na disputa de preço."
  }
];
