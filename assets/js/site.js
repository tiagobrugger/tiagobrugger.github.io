/* Tiago Brugger — interações do site */
(function () {
  // Menu mobile
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) btn.addEventListener('click', function () { nav.classList.toggle('aberto'); });

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Revelar ao rolar
  var alvos = document.querySelectorAll('.revelar');
  if ('IntersectionObserver' in window && alvos.length) {
    var obs = new IntersectionObserver(function (ent) {
      ent.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); } });
    }, { threshold: .12 });
    alvos.forEach(function (a) { obs.observe(a); });
  } else {
    alvos.forEach(function (a) { a.classList.add('visivel'); });
  }

  // Carrossel de conteúdo (alimentado por assets/data/posts.js)
  var trilho = document.getElementById('carrossel');
  if (!trilho) return;
  var filtros = document.getElementById('filtros');
  var dados = window.PUBLICACOES || [];

  function idInstagram(link) {
    var m = /instagram\.com\/(?:p|reel)\/([^\/?#]+)/.exec(link || '');
    return m ? m[1] : null;
  }

  function blocoEmbed(p) {
    var id = idInstagram(p.link);
    if (!id) return '<div class="capa">' + p.categoria + '</div>';
    return '<div class="capa"><iframe src="https://www.instagram.com/p/' + id + '/embed" loading="lazy" scrolling="no" title="' + p.titulo + '"></iframe>' +
           '<a class="cobertura" href="' + p.link + '" target="_blank" rel="noopener" aria-label="Abrir publicação"></a></div>';
  }

  function cartao(p) {
    var capa;
    if (p.imagem) {
      // Se o arquivo de imagem não existir na pasta, cai automaticamente no embed do Instagram.
      capa = '<div class="capa" data-ampliar="' + p.imagem + '" data-link="' + (p.link || '') + '" data-titulo="' + p.titulo + '">' +
             '<img src="' + p.imagem + '" alt="' + p.titulo + '" loading="lazy" onerror="window.trocarPorEmbed(this)">' +
             '<span class="lupa">Ampliar</span></div>';
    } else {
      capa = blocoEmbed(p);
    }
    return '<article class="post">' + capa +
      '<div class="corpo"><span class="tag">' + p.categoria + '</span>' +
      '<h3>' + p.titulo + '</h3><p>' + (p.resumo || '') + '</p>' +
      (p.link ? '<a class="link" href="' + p.link + '" target="_blank" rel="noopener">Ver publicação &rarr;</a>' : '') +
      '</div></article>';
  }

  window.trocarPorEmbed = function (img) {
    var c = img.parentNode;
    var sub = blocoEmbed({ link: c.dataset.link, titulo: c.dataset.titulo, categoria: '' });
    c.outerHTML = sub;
  };

  function pintar(cat) {
    var lista = cat && cat !== 'Todos' ? dados.filter(function (p) { return p.categoria === cat; }) : dados;
    trilho.innerHTML = lista.length ? lista.map(cartao).join('') :
      '<p class="lead">Nenhuma publicação nesta categoria ainda.</p>';
  }

  if (!dados.length) {
    trilho.innerHTML = '<p class="lead">Nenhuma publicação cadastrada. Edite o arquivo assets/data/posts.js.</p>';
  } else {
    var cats = ['Todos'].concat(dados.map(function (p) { return p.categoria; })
      .filter(function (v, i, a) { return a.indexOf(v) === i; }));
    if (filtros) {
      filtros.innerHTML = cats.map(function (c, i) {
        return '<button class="filtro' + (i === 0 ? ' ativo' : '') + '" data-cat="' + c + '">' + c + '</button>';
      }).join('');
      filtros.addEventListener('click', function (e) {
        var b = e.target.closest('.filtro'); if (!b) return;
        filtros.querySelectorAll('.filtro').forEach(function (f) { f.classList.remove('ativo'); });
        b.classList.add('ativo'); pintar(b.dataset.cat); trilho.scrollTo({ left: 0, behavior: 'smooth' });
      });
    }
    pintar('Todos');
  }

  // Lightbox: clique na capa amplia a peça
  var caixa = document.createElement('div');
  caixa.className = 'lightbox';
  caixa.innerHTML = '<button class="fechar" aria-label="Fechar">&times;</button><img alt="">';
  document.body.appendChild(caixa);
  function fechar() { caixa.classList.remove('aberto'); }
  caixa.addEventListener('click', fechar);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  trilho.addEventListener('click', function (e) {
    var c = e.target.closest('.capa[data-ampliar]'); if (!c) return;
    caixa.querySelector('img').src = c.dataset.ampliar;
    caixa.classList.add('aberto');
  });

  // Setas
  document.querySelectorAll('[data-rolar]').forEach(function (s) {
    s.addEventListener('click', function () {
      trilho.scrollBy({ left: Number(s.dataset.rolar) * 320, behavior: 'smooth' });
    });
  });
})();
