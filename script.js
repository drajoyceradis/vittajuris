(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var head = document.head;
    if (head && !document.querySelector('link[href="pages.css"]')) {
      var extraCss = document.createElement('link');
      extraCss.rel = 'stylesheet';
      extraCss.href = 'pages.css';
      head.appendChild(extraCss);
    }

    document.body.classList.add('home-page');

    var brand = document.querySelector('.brand');
    if (brand) brand.setAttribute('href', 'index.html');

    var navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks[0]) navLinks[0].setAttribute('href', 'pacientes.html');
    if (navLinks[1]) navLinks[1].setAttribute('href', 'advogados.html');
    if (navLinks[2]) navLinks[2].setAttribute('href', '#sobre');
    if (navLinks[3]) navLinks[3].setAttribute('href', '#contato');

    var heroEyebrow = document.querySelector('.hero-copy .eyebrow');
    if (heroEyebrow) {
      heroEyebrow.textContent = 'Medicina clínica e atuação técnica em espaços distintos, com comunicação clara para cada público';
    }

    var heroTitle = document.querySelector('.hero-copy h1');
    if (heroTitle) {
      heroTitle.textContent = 'Dois caminhos. A mesma autoridade.';
    }

    var heroCopy = document.querySelector('.hero-copy');
    if (heroCopy && !document.querySelector('.home-note')) {
      var note = document.createElement('div');
      note.className = 'home-note';
      note.innerHTML = '<strong>Escolha a área correta.</strong> Pacientes encontram aqui um atendimento médico particular com linguagem clara e acolhimento. Advogados acessam uma página própria, com foco técnico, análise documental e contato profissional.';
      var ctaRow = heroCopy.querySelector('.cta-row');
      if (ctaRow) {
        heroCopy.insertBefore(note, ctaRow);
      } else {
        heroCopy.appendChild(note);
      }
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
    if (visualParagraph) {
      visualParagraph.textContent = 'Um caminho pensado para pacientes e outro para advogados, sem ruído de linguagem e com posicionamento mais sofisticado.';
    }

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
      if (lButtons[1]) {
        lButtons[1].setAttribute('href', 'https://wa.me/5527998134032');
        lButtons[1].textContent = 'WhatsApp';
      }
    }

    var contactTitle = document.querySelector('#contato .cta-panel h2');
    if (contactTitle) contactTitle.textContent = 'Entre pelo caminho certo';

    var contactParagraphs = document.querySelectorAll('#contato .cta-panel p');
    if (contactParagraphs[0]) {
      contactParagraphs[0].textContent = 'Para pacientes, há uma página própria com informações sobre consulta, atendimento particular e contato direto.';
    }
    if (contactParagraphs[1]) {
      contactParagraphs[1].textContent = 'Para advogados e escritórios, a página jurídica concentra a apresentação técnica, o fluxo de análise e os canais profissionais.';
    }

    var contactButtons = document.querySelectorAll('#contato .cta-panel .btn');
    if (contactButtons[0]) {
      contactButtons[0].setAttribute('href', 'pacientes.html');
      contactButtons[0].textContent = 'Área do paciente';
    }
    if (contactButtons[1]) {
      contactButtons[1].setAttribute('href', 'advogados.html');
      contactButtons[1].textContent = 'Área jurídica';
    }

    var footerPatientLink = document.querySelector('.caminhos-bifurcacao a[href="#pacientes"]');
    if (footerPatientLink) footerPatientLink.setAttribute('href', 'pacientes.html');

    var footerLawLink = document.querySelector('.caminhos-bifurcacao a[href="#advogado"]');
    if (footerLawLink) footerLawLink.setAttribute('href', 'advogados.html');

    var footerPitch = document.querySelector('.footer-copy p');
    if (footerPitch) {
      footerPitch.textContent = 'Plataforma institucional com entrada separada para pacientes e para o setor jurídico.';
    }

    window.addEventListener('scroll', function () {
      var header = document.querySelector('.header');
      if (!header) return;
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });
})();
