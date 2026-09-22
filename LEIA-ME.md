# Site pessoal, Tiago Brugger

Site estático (HTML/CSS/JS puro), publicado gratuitamente no GitHub Pages.

## Uso no dia a dia

| Arquivo | Para que serve |
|---|---|
| `CONFIGURAR-GITHUB.bat` | **Rodar uma vez só.** Cria o vínculo com o GitHub e faz o primeiro envio. |
| `PUBLICAR.bat` | **Dois cliques sempre que mudar algo.** Envia as alterações e o site atualiza em até 2 minutos. |
| `VER-SITE-LOCAL.bat` | Abre o site no navegador antes de publicar, para conferir. |

## Estrutura

```
index.html        Página inicial
sobre.html        Trajetória e valores
atuacao.html      Negócios governamentais e licitações
tecnologia.html   Comunicação unificada, salas híbridas, IA
apae.html         APAE Itanhaém e comunidade
conteudo.html     Carrossel de publicações por categoria
contato.html      Canais de contato
projeto-tcdf.html Projeto TCDF (página de projeto)
projeto-bndes.html Projeto BNDES (página de projeto)
404.html          Página de erro

assets/css/estilo.css     Toda a identidade visual (navy + verde-água)
assets/js/site.js         Menu, animações e carrossel
assets/data/posts.js      >> É AQUI que se adiciona publicação <<
assets/data/projetos.js   >> É AQUI que se adiciona card de projeto (página Atuação) <<
assets/img/projetos/      Logos dos órgãos (e, depois, fotos dos projetos)
assets/img/               Imagens e favicon
```

## Como adicionar uma publicação ao carrossel

Abra `assets/data/posts.js` no Bloco de Notas e acrescente um bloco no fim da lista:

```js
{
  categoria: "Licitações",
  titulo: "Título do post",
  resumo: "Uma linha explicando.",
  imagem: "assets/img/nome-da-imagem.jpg",
  link: "https://www.instagram.com/p/..."
}
```

Blocos separados por vírgula; o último não leva vírgula. `imagem` pode ficar `""`.

**Categorias oficiais** (escreva exatamente assim): `Licitações`, `Tecnologia Pública`, `Itanhaém`, `Reflexões`.

Depois: dois cliques em `PUBLICAR.bat`.

## Como adicionar um projeto

1. Copie `projeto-tcdf.html` com outro nome (ex.: `projeto-novo.html`) e troque os textos.
2. Coloque o logo do órgão em `assets/img/projetos/` (PNG com fundo transparente).
3. Em `assets/data/projetos.js`, acrescente um bloco apontando para a página nova.
4. Inclua a página no `sitemap.xml`.

Para esconder um equipamento da lista sem apagar, acrescente `class="oculto"` no item (`<li class="oculto">`).

## Como trocar textos

Abra o `.html` da página no Bloco de Notas (ou VS Code), altere o texto entre as tags e salve.
Não mexa nas tags `<div class="...">`, só no texto.

## Domínio próprio (já configurado: tiagobrugger.com.br)

O `CNAME`, as tags canonical, o `sitemap.xml` e o `robots.txt` já apontam para `https://tiagobrugger.com.br/`. Os passos abaixo ficam como referência.

1. Renomeie `CNAME.exemplo` para `CNAME` e deixe dentro só o domínio, ex.: `tiagobrugger.com.br`
2. No painel do registrador (Registro.br, etc.), aponte:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` do `www` → `SEUUSUARIO.github.io`
3. Rode `PUBLICAR.bat`
4. Em Settings → Pages do repositório, informe o domínio e marque *Enforce HTTPS*
5. Atualize o domínio em `robots.txt`, `sitemap.xml` e nas tags `<link rel="canonical">` das páginas

## Paleta

- Navy escuro: `#071F25` / `#0B2F37`
- Navy médio: `#103F4A`
- Verde-água (acento): `#7FD9E6` sobre fundo escuro, `#0F7C8F` sobre fundo claro
- Creme: `#F4F1EA` / `#EAE4D6`

Mesma paleta do sistema editorial das peças de rede social (tema Navy).
