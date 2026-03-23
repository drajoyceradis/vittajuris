(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var body = document.body;
    var head = document.head;
    var isInnerPage = body.classList.contains('inner-page');
    var isHome = !isInnerPage && !!document.querySelector('.hero');

    if (isHome) {
      body.classList.add('home-page');
      if (head && !document.querySelector('link[href="pages.css"]')) {
        var extraCss = document.createElement('link');
        extraCss.rel = 'stylesheet';
        extraCss.href = 'pages.css';
        head.appendChild(extraCss);
      }
      decorateHome();
    }

    setupHeaderScroll();
    setupNavigationState(isHome);
    setupButtonGlow();
    setupReveals();
    setupTilt();
    setupHeroMotion(isHome);
  });

  function decorateHome() {
    var brand = document.querySelector('.brand');
    if (brand) brand.setAttribute('href', 'index.html');

    var navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks[0]) navLinks[0].setAttribute('href', 'pacientes.html');
    if (navLinks[1]) navLinks[1].setAttribute('href', 'advogados.html');
    if (navLinks[2]) navLinks[2].setAttribute('href', '#sobre');
    if (navLinks[3]) navLinks[3].setAttribute('href', '#contato');

    var heroEyebrow = document.querySelector('.hero-copy .eyebrow');
    if (heroEyebrow) heroEyebrow.textContent = 'Medicina clínica e atuação técnica em espaços distintos, com comunicação clara para cada público';

    var heroTitle = document.querySelector('.hero-copy h1');
    if (heroTitle) heroTitle.textContent = 'Dois caminhos. A mesma autoridade.';

    var heroCopy = document.querySelector('.hero-copy');
    if (heroCopy && !document.querySelector('.home-note')) {
      var note = document.createElement('div');
      note.className = 'home-note';
      note.innerHTML = '<strong>Escolha a área correta.</strong> Pacientes encontram aqui um atendimento médico particular com linguagem clara e acolhimento. Advogados acessam uma página própria, com foco técnico, análise documental e contato profissional.';
      var ctaRow = heroCopy.querySelector('.cta-row');
      if (ctaRow) heroCopy.insertBefore(note, ctaRow);
    }

    var heroButtons = document.querySelectorAll('.hero-copy .cta-row .btn');
    if (heroButtons[0]) {
      heroButtons[0].setAttribute('href', 'pacientes.html');
      heroButtons[0].textContent = 'Sou paciente';
    }
    if (heroButtons[1]) {
      heroButtons[1].setAttribute('href', 'advogados.html');
      heroButtons[1].textContent = 'Sou advogado(a)';
    }

    var visualTitle = document.querySelector('.visual-card .serif');
    if (visualTitle) visualTitle.textContent = 'Escolha sua área';

    var visualParagraph = document.querySelector('.visual-card p');
    if (visualParagraph) visualParagraph.textContent = 'Um caminho pensado para pacientes e outro para advogados, sem ruído de linguagem e com posicionamento mais sofisticado.';

    var visualButton = document.querySelector('.visual-card .btn');
    if (visualButton) {
      visualButton.setAttribute('href', '#pacientes');
      visualButton.textContent = 'Ver caminhos';
    }

    var patientCard = document.querySelector('#pacientes .path-card:first-child');
    if (patientCard) {
      var label = patientCard.querySelector('.label');
      var title = patientCard.querySelector('h3');
      var text = patientCard.querySelector('p');
      var listItems = patientCard.querySelectorAll('.list div');
      var button = patientCard.querySelector('.btn');
      if (label) label.textContent = 'Página exclusiva';
      if (title) title.textContent = 'Pacientes';
      if (text) text.textContent = 'Consulta médica particular com escuta qualificada, condução individualizada e comunicação mais clara para quem busca atendimento.';
      if (listItems[0]) listItems[0].textContent = 'Atendimento clínico com linguagem acessível e cuidado individualizado';
      if (listItems[1]) listItems[1].textContent = 'Informações objetivas sobre consulta, seguimento e contato';
      if (listItems[2]) listItems[2].textContent = 'Link próprio para divulgação direta a pacientes';
      if (button) {
        button.setAttribute('href', 'pacientes.html');
        button.textContent = 'Entrar na área do paciente';
      }
    }

    var lawyerCard = document.getElementById('advogado');
    if (lawyerCard) {
      var lLabel = lawyerCard.querySelector('.label');
      var lTitle = lawyerCard.querySelector('h3');
      var lText = lawyerCard.querySelector('p');
      var lListItems = lawyerCard.querySelectorAll('.list div');
      var lButtons = lawyerCard.querySelectorAll('.btn');
      if (lLabel) lLabel.textContent = 'Página exclusiva';
      if (lTitle) lTitle.textContent = 'Advogados';
      if (lText) lText.textContent = 'Página técnica voltada a escritórios e advogados, com foco em análise documental, pareceres e contato profissional sem confundir o público clínico.';
      if (lListItems[0]) lListItems[0].textContent = 'Linguagem institucional e posicionamento técnico';
      if (lListItems[1]) lListItems[1].textContent = 'Fluxo claro para envio de documentação e definição de escopo';
      if (lListItems[2]) lListItems[2].textContent = 'Link específico para divulgação ao setor jurídico';
      if (lButtons[0]) {
        lButtons[0].setAttribute('href', 'advogados.html');
        lButtons[0].textContent = 'Entrar na área jurídica';
      }
      if (lButtons[1]) lButtons[1].textContent = 'WhatsApp';
    }
  }

  function setupHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;
    function updateHeader() {
      if (window.scrollY > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  function setupNavigationState(isHome) {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
    if (!navLinks.length) return;

    if (!isHome) {
      var path = window.location.pathname;
      navLinks.forEach(function (link) {
        link.classList.remove('is-active');
        var href = link.getAttribute('href') || '';
        if ((path.indexOf('pacientes') > -1 && href.indexOf('pacientes') > -1) || (path.indexOf('advogados') > -1 && href.indexOf('advogados') > -1)) {
          link.classList.add('is-active');
        }
      });
      return;
    }

    var sectionMap = [
      { id: 'pacientes', match: 'pacientes.html' },
      { id: 'advogado', match: 'advogados.html' },
      { id: 'sobre', match: '#sobre' },
      { id: 'contato', match: '#contato' }
    ];

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var sectionId = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href') || '';
          var active = false;
          sectionMap.forEach(function (item) {
            if (item.id === sectionId && href.indexOf(item.match) > -1) active = true;
          });
          link.classList.toggle('is-active', active);
        });
      });
    }, { threshold: 0.42 });

    sectionMap.forEach(function (item) {
      var section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
  }

  function setupButtonGlow() {
    document.querySelectorAll('.btn').forEach(function (button) {
      button.addEventListener('pointermove', function (event) {
        var rect = button.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width) * 100;
        var y = ((event.clientY - rect.top) / rect.height) * 100;
        button.style.setProperty('--pointer-x', x + '%');
        button.style.setProperty('--pointer-y', y + '%');
      });
    });
  }

  function setupReveals() {
    if (!('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.hero-copy > *, .visual-card, .path-card, .editorial-box, .editorial-copy > *, .cta-panel, .footer-box, .page-panel, .side-panel, .info-card, .highlight-card, .step-card, .contact-card, .page-footer-card, .thankyou-card');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -10% 0px' });

    Array.prototype.forEach.call(targets, function (element, index) {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', ((index % 6) * 70) + 'ms');
      observer.observe(element);
    });
  }

  function setupTilt() {
    if (!window.matchMedia || window.matchMedia('(pointer: coarse)').matches) return;
    var cards = document.querySelectorAll('.visual-card, .path-card, .cta-panel, .page-panel, .side-panel, .info-card, .highlight-card, .step-card, .contact-card, .page-footer-card, .thankyou-card');
    Array.prototype.forEach.call(cards, function (card) {
      card.classList.add('tilt-ready');
      card.addEventListener('pointermove', function (event) {
        var rect = card.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width;
        var py = (event.clientY - rect.top) / rect.height;
        var rotateY = (px - 0.5) * 8;
        var rotateX = (0.5 - py) * 8;
        card.style.transform = 'translateY(-10px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });
  }

  function setupHeroMotion(isHome) {
    if (!isHome || !window.matchMedia || window.matchMedia('(pointer: coarse)').matches) return;
    var heroVisual = document.querySelector('.hero-visual');
    var visualCard = document.querySelector('.visual-card');
    if (!heroVisual) return;
    heroVisual.addEventListener('pointermove', function (event) {
      var rect = heroVisual.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.transform = 'perspective(1200px) rotateX(' + (-y * 4).toFixed(2) + 'deg) rotateY(' + (x * 5).toFixed(2) + 'deg) translateY(-2px)';
      if (visualCard) visualCard.style.transform = 'translate3d(' + (x * 10).toFixed(2) + 'px, ' + (y * 10).toFixed(2) + 'px, 24px)';
    });
    heroVisual.addEventListener('pointerleave', function () {
      heroVisual.style.transform = '';
      if (visualCard) visualCard.style.transform = '';
    });
  }
})();
