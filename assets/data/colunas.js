/* ============================================================
   COLUNAS DE OPINIÃO
   ------------------------------------------------------------
   É AQUI que se adiciona uma coluna à página Opinião, à home e
   ao rodapé de todas as páginas (a home mostra as 2 mais recentes
   e o rodapé mostra as 3 mais recentes, sozinhos).

   Cada coluna precisa de uma página própria na raiz do site
   (ex.: opiniao-licitacao-vida-em-sociedade.html). Para criar uma
   nova: copie uma página de coluna existente, troque título,
   textos, datas e o JSON-LD, acrescente um bloco abaixo, inclua a
   página no sitemap.xml. O rodapé se atualiza sozinho.

   Campos:
     pagina     arquivo da página da coluna
     titulo     título completo (o mesmo do H1 da página)
     rodape     título curto que aparece no rodapé
     categoria  uma das 4 categorias oficiais: Licitações,
                Tecnologia Pública, Itanhaém, Reflexões
     data       AAAA-MM-DD (ordena da mais recente para a mais antiga)
     resumo     uma ou duas frases para o card

   O último bloco não leva vírgula.
   ============================================================ */

window.COLUNAS = [
  {
    pagina: "opiniao-seguro-garantia-contratual.html",
    rodape: "Seguro-garantia não é garantia do produto",
    titulo: "Seguro contratual: o mal-entendido mais comum que vejo nos processos",
    categoria: "Licitações",
    data: "2026-10-05",
    resumo: "Seguro-garantia não é a garantia do fabricante. É segurança econômica para o órgão público, e a apólice tem prazo para ser apresentada."
  },
  {
    pagina: "opiniao-consultoria-tecnica-acelera-licitacao.html",
    rodape: "Diálogo com o mercado evita pregão deserto",
    titulo: "Conversar com o mercado antes de comprar evita pregão deserto e produto já obsoleto.",
    categoria: "Licitações",
    data: "2026-09-28",
    resumo: "A aproximação entre consultores especializados e a equipe do órgão, antes da compra, transmite conhecimento tácito de mercado e reduz o risco de pregão deserto ou solução já obsoleta."
  },
  {
    pagina: "opiniao-especificacao-trava-processo.html",
    rodape: "Especificação trava o processo",
    titulo: "Quando a especificação trava o processo antes da disputa.",
    categoria: "Licitações",
    data: "2026-09-28",
    resumo: "Uma exigência de certificação nacional para um equipamento por natureza internacional inabilitou todos os fornecedores e obrigou o órgão a recomeçar do zero. O processo não travou na disputa: travou na especificação."
  },
  {
    pagina: "opiniao-carona-ata-registro-de-precos.html",
    rodape: "Carona em ata de registro de preço",
    titulo: "Carona em ata de registro de preço: agilidade sem abrir mão da segurança jurídica.",
    categoria: "Licitações",
    data: "2026-09-25",
    resumo: "Quando o prazo é curto, a adesão à ata de registro de preço permite comprar rápido sem abrir mão da pesquisa de preço e da segurança jurídica."
  },
  {
    pagina: "opiniao-ata-registro-de-precos-planejamento.html",
    rodape: "Ata de registro de preços e planejamento",
    titulo: "Ata de Registro de Preços: planejamento que sustenta a compra pública ao longo do ano.",
    categoria: "Licitações",
    data: "2026-09-25",
    resumo: "A ata de registro de preços fixa preço e potencial de compra e deixa a administração comprar de forma fracionada ao longo do exercício, com planejamento e agilidade."
  },
  {
    pagina: "opiniao-licitacao-vida-em-sociedade.html",
    rodape: "Licitação e vida em sociedade",
    titulo: "Licitação não é assunto de órgão público. É assunto de vida em sociedade.",
    categoria: "Licitações",
    data: "2026-09-24",
    resumo: "Uma obra parada em Itanhaém mostra por que entender o processo licitatório muda a forma de escolher representantes e cobrar resultados."
  },
  {
    pagina: "opiniao-menor-preco-nao-e-economia.html",
    rodape: "Menor preço não é economia",
    titulo: "O menor preço, sozinho, não é economia para a instituição pública.",
    categoria: "Tecnologia Pública",
    data: "2026-09-24",
    resumo: "Comprar o equipamento mais barato para a sala de videoconferência costuma sair caro. Economicidade começa no estudo técnico, não na disputa de preço."
  }
];
