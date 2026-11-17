document.addEventListener('DOMContentLoaded', () => {
  const excusesDatabase = [
    // TECNOLOGIA / TI (20)
    { category: "tech", text: "Na minha máquina funciona perfeitamente; o problema deve ser alguma inconsistência no ambiente de produção.", credibility: 95, tip: "O clássico supremo da engenharia de software. Diga com confiança absoluta." },
    { category: "tech", text: "O container do Docker entrou em loop infinito de reinicialização e está a consumir 100% da memória RAM do meu portátil.", credibility: 92, tip: "Mencione que já está a ver os logs para parecer proativo." },
    { category: "tech", text: "Estou à espera que o pipeline de CI/CD termine o build; hoje os servidores parecem estar movidos a vapor.", credibility: 94, tip: "Funciona sempre porque ninguém tem paciência para ir verificar o progresso do build." },
    { category: "tech", text: "Um certificado SSL expirou silenciosamente durante a madrugada e bloqueou toda a autenticação local.", credibility: 91, tip: "Culpar certificados expirados é infalível em qualquer equipa técnica." },
    { category: "tech", text: "Apanhei um conflito de merge gigantesco ao fazer pull da branch principal e estou a resolver linha a linha para não partir nada.", credibility: 93, tip: "Ninguém ousa apressar quem está a resolver um merge conflict delicado." },
    { category: "tech", text: "A API de terceiros está a devolver erro 503 intermitente e estou a implementar um mecanismo de retry antes de avançar.", credibility: 96, tip: "Transferir a culpa para uma API externa tira imediatamente o peso de cima de si." },
    { category: "tech", text: "O servidor de DNS está a propagar as alterações mais devagar do que o previsto; só posso testar assim que atualizar.", credibility: 89, tip: "DNS é a desculpa mais difícil de refutar na história da internet." },
    { category: "tech", text: "Fui limpar a cache e os volumes locais e acabei por apagar a base de dados de testes que tinha povoada.", credibility: 84, tip: "Use um tom de frustração controlada enquanto corre os scripts de seed novamente." },
    { category: "tech", text: "Uma atualização automática do sistema operativo quebrou as dependências do meu ambiente de desenvolvimento.", credibility: 90, tip: "Funciona especialmente bem às segundas-feiras de manhã." },
    { category: "tech", text: "Estou a investigar uma fuga de memória (memory leak) que só acontece ao fim de 40 minutos de execução contínua.", credibility: 88, tip: "Justifica perfeitamente ficar em silêncio e indisponível durante quase uma hora." },
    { category: "tech", text: "A documentação oficial da biblioteca está desatualizada e o método que deveríamos usar foi marcado como deprecated na última versão.", credibility: 91, tip: "Culpar a documentação de terceiros gera empatia imediata na equipa." },
    { category: "tech", text: "O meu firewall bloqueou a ligação SSH ao servidor de staging e estou a aguardar que a equipa de segurança renove o meu IP.", credibility: 87, tip: "Excelente se trabalhar remotamente ou a partir de uma rede nova." },
    { category: "tech", text: "Havia um ponto e vírgula invisível (caractere Unicode) colado de um exemplo que partiu o parser inteiro.", credibility: 82, tip: "Parece absurdo, mas todo o programador sabe que acontece de verdade." },
    { category: "tech", text: "A VPN corporativa está a cair de cinco em cinco minutos e não consigo manter a sessão ligada ao banco de dados.", credibility: 95, tip: "VPN instável é o equivalente moderno ao trânsito engarrafado." },
    { category: "tech", text: "Estou a aguardar o rate limit da API fazer reset porque atingimos o limite de pedidos durante os testes de carga.", credibility: 90, tip: "Diga que está a aproveitar a pausa para otimizar as chamadas." },
    { category: "tech", text: "O webhook está a disparar em duplicado e estou a tentar perceber se o erro vem do nosso endpoint ou do serviço externo.", credibility: 89, tip: "Usa vocabulário técnico suficiente para encerrar qualquer microgestão." },
    { category: "tech", text: "Fiquei preso numa cadeia interminável de autenticação de dois fatores depois de atualizar a aplicação no telemóvel.", credibility: 92, tip: "Todo o mundo já perdeu tempo precioso com códigos MFA." },
    { category: "tech", text: "O linter e o formatador automático entraram em guerra e estão a reescrever o ficheiro de forma diferente cada vez que guardo.", credibility: 80, tip: "Ideal para aliviar o ambiente numa reunião tensa." },
    { category: "tech", text: "A indexação da base de dados está a correr em segundo plano e deixou todas as queries em timeout.", credibility: 88, tip: "Funciona muito bem para justificar lentidão ao entregar relatórios ou dados." },
    { category: "tech", text: "Achei que estava a testar no ambiente de homologação, mas percebi a tempo que estava ligado a produção e parei tudo para rever.", credibility: 97, tip: "Ninguém critica quem parou para evitar um desastre em produção — ganha até elogios pela cautela." },

    // TRABALHO (12)
    { category: "trabalho", text: "O meu computador decidiu iniciar uma atualização obrigatória de sistema aos 99% e está há 40 minutos a dizer 'Não desligue o equipamento'.", credibility: 94, tip: "Envie uma foto genérica de ecrã azul de atualização caso insistam." },
    { category: "trabalho", text: "Um técnico da operadora veio arranjar a fibra ótica do vizinho e desligou o cabo do meu apartamento por engano.", credibility: 91, tip: "Use os dados móveis do telemóvel só para mandar esta mensagem e fique offline." },
    { category: "trabalho", text: "Fiquei preso na garagem do prédio porque o portão automático avariou mesmo na hora em que ia sair.", credibility: 88, tip: "Funciona melhor se disser que o zelador já chamou a manutenção." },
    { category: "trabalho", text: "Comi algo suspeito ontem à noite e o meu estômago está a realizar uma reunião de emergência neste exato momento.", credibility: 96, tip: "Ninguém faz perguntas de seguimento quando o assunto é gastrointestinal." },
    { category: "trabalho", text: "O meu gato caminhou sobre o teclado enquanto eu estava na casa de banho e ativou um atalho que encriptou o meu ambiente de trabalho.", credibility: 62, tip: "Só use se todos na equipa souberem que realmente tem um gato." },
    { category: "trabalho", text: "Houve uma fuga de água no apartamento de cima e estou a tentar salvar o meu portátil antes que o teto ceda.", credibility: 85, tip: "Excelente para sair abruptamente de uma chamada longa." },
    { category: "trabalho", text: "O meu despertador tocou, mas como o telemóvel atualizou o fuso horário sozinho durante a madrugada, acordei uma hora atrasado.", credibility: 79, tip: "Culpe sempre a tecnologia com tom de indignação genuína." },
    { category: "trabalho", text: "Fui ajudar um vizinho idoso que ficou trancado do lado de fora e estou à espera do serralheiro com ele.", credibility: 90, tip: "Além de justificar o atraso, ganha pontos de bom cidadão." },
    { category: "trabalho", text: "A minha cadeira ergonómica partiu o pistão hidráulico e estou a trabalhar praticamente sentado no chão até resolver isto.", credibility: 74, tip: "Ideal para justificar por que razão não vai ligar a câmara na reunião." },
    { category: "trabalho", text: "O estafeta entregou uma encomenda urgente do meu chefe anterior aqui em casa por engano e tive de ir devolvê-la.", credibility: 68, tip: "Use apenas em empresas onde ninguém conhece o seu emprego anterior." },
    { category: "trabalho", text: "Estou com uma enxaqueca ocular tão forte que as letras no ecrã estão a dançar salsa.", credibility: 92, tip: "Responda às mensagens com 10 minutos de atraso para parecer que está de olhos fechados." },
    { category: "trabalho", text: "Fiquei sem bateria no carro no meio da rotunda e estou a aguardar a assistência em viagem.", credibility: 89, tip: "Se trabalhar remotamente, diga que foi levar alguém ao médico antes do expediente." },

    // RELACIONAMENTO (12)
    { category: "relacionamento", text: "Não respondi antes porque o meu telemóvel entrou em modo de poupança extrema e bloqueou todas as notificações.", credibility: 82, tip: "Mostre o telemóvel com menos de 10% de bateria para validar a história." },
    { category: "relacionamento", text: "Adormeci exatamente cinco minutos antes de te mandar mensagem e só acordei agora com o susto.", credibility: 87, tip: "Mande a mensagem com um pequeno erro de digitação para parecer sonolento." },
    { category: "relacionamento", text: "Estava a organizar uma surpresa para nós e tive de esconder tudo rapidamente quando ouvi barulho.", credibility: 75, tip: "Atenção: obriga-o a comprar pelo menos um chocolate nos próximos dias." },
    { category: "relacionamento", text: "Um amigo meu está a passar por um desgosto amoroso terrível e precisei de ficar ao telefone a impedi-lo de mandar mensagem à ex.", credibility: 91, tip: "Ninguém pode criticar uma missão de resgate emocional." },
    { category: "relacionamento", text: "Juro que escrevi a resposta toda, mas esqueci-me de carregar no botão de enviar e bloqueei o ecrã.", credibility: 84, tip: "Clássico atemporal. Funciona em 8 de cada 10 vezes." },
    { category: "relacionamento", text: "Fiquei preso numa conversa interminável com a minha mãe sobre como recuperar a palavra-passe do Facebook dela.", credibility: 95, tip: "Toda a gente já passou por isso e sabe que pode durar horas." },
    { category: "relacionamento", text: "Deixei o telemóvel a carregar na cozinha enquanto fui tomar banho e perdi completamente a noção do tempo.", credibility: 89, tip: "Simples, direta e impossível de refutar." },
    { category: "relacionamento", text: "Tive uma crise existencial repentina sobre o rumo da minha vida e precisei de 40 minutos a olhar para o teto em silêncio.", credibility: 77, tip: "A sinceridade dramática costuma desarmar qualquer cobrança." },
    { category: "relacionamento", text: "Encontrei um cão perdido na rua sem coleira e fiquei a tentar descobrir de quem era até o dono aparecer.", credibility: 86, tip: "Combine a descrição do cão antes caso o tema volte à conversa." },
    { category: "relacionamento", text: "Estava a tentar resolver um problema bancário pelo telefone e fiquei 45 minutos a ouvir música de elevador em espera.", credibility: 93, tip: "Reclame da operadora ou do banco logo em seguida para dar realismo." },
    { category: "relacionamento", text: "A minha cabeça estava tão cheia hoje que li a tua mensagem, respondi mentalmente e achei mesmo que tinha enviado.", credibility: 88, tip: "Peça desculpa com um elogio logo a seguir." },
    { category: "relacionamento", text: "Fui tentar fazer uma receita nova para o jantar, quase incendiei a cozinha e passei a última hora a limpar tudo.", credibility: 80, tip: "Ótima desculpa para pedir comida entregue em casa logo depois." },

    // SOCIAL (12)
    { category: "social", text: "Infelizmente não vou conseguir ir hoje: tenho de ficar em casa a aguardar uma entrega que só pode ser recebida pessoalmente.", credibility: 86, tip: "Funciona melhor à noite ou aos sábados de manhã." },
    { category: "social", text: "A minha bateria social chegou a 1% e, se eu sair de casa hoje, vou acabar por falar apenas por grunhidos.", credibility: 94, tip: "A honestidade bem-humorada costuma ser muito bem aceite entre amigos." },
    { category: "social", text: "Comecei a ver uma série documental às 18h e agora estou emocionalmente investido demais para abandonar a investigação.", credibility: 73, tip: "Diga que amanhã conta o final para compensar a ausência." },
    { category: "social", text: "Tive de fazer de babysitter de última hora do gato/cão de um primo que teve uma emergência.", credibility: 89, tip: "Animais de estimação são o escudo social mais eficaz que existe." },
    { category: "social", text: "O meu carro acendeu uma luz laranja no painel que parece uma torneira a voar e não me atrevo a conduzir até à oficina.", credibility: 91, tip: "Ninguém vai pedir para você arriscar o motor do carro por um jantar." },
    { category: "social", text: "Fui ao dentista hoje à tarde e metade da minha cara ainda está anestesiada; se eu beber algo, vou babar-me todo.", credibility: 93, tip: "Mande um áudio falando um pouco enrolado se quiser nível máximo de atuação." },
    { category: "social", text: "Esqueci-me completamente de que hoje era o aniversário de casamento dos meus tios e fui intimado a aparecer.", credibility: 85, tip: "Compromissos familiares têm hierarquia superior a quase qualquer evento." },
    { category: "social", text: "Estou numa cruzada pessoal contra o meu roupeiro e, se eu não organizar tudo hoje, amanhã não tenho roupa lavada.", credibility: 78, tip: "Use quando quiser recusar um plano casual de última hora." },
    { category: "social", text: "Apanhei uma corrente de ar hoje e estou com o pescoço tão travado que tenho de virar o corpo inteiro para olhar para o lado.", credibility: 90, tip: "Funciona especialmente bem se tiver de dirigir ou ficar muito tempo em pé." },
    { category: "social", text: "O meu orçamento mensal entrou em recessão técnica hoje e só volto à vida social no próximo dia de pagamento.", credibility: 95, tip: "Direto, relatable e encerra o assunto sem dramas." },
    { category: "social", text: "Prometi a mim mesmo que hoje ia dormir cedo para regular o sono e, se quebrar a promessa agora, perco o respeito por mim.", credibility: 81, tip: "Diga com tom filosófico." },
    { category: "social", text: "Fiquei responsável por testar uma receita de bolo para amanhã e a primeira tentativa parece um tijolo refratário.", credibility: 83, tip: "Garante que ninguém desconfie e ainda gera curiosidade." }
  ];

  const categoryButtons = document.querySelectorAll('.cat-btn');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const whatsappBtn = document.getElementById('whatsapp-btn');
  const copyLabel = document.getElementById('copy-label');
  const excuseText = document.getElementById('excuse-text');
  const excuseTag = document.getElementById('excuse-tag');
  const credibilityScore = document.getElementById('credibility-score');
  const excuseTip = document.getElementById('excuse-tip');

  let currentCategory = 'todas';
  let lastExcuseIndex = -1;

  const categoryLabels = {
    tech: '💻 Tech / TI',
    trabalho: '💼 Trabalho',
    relacionamento: '❤️ Relacionamento',
    social: '🎉 Social'
  };

  function generateExcuse() {
    const filtered = currentCategory === 'todas'
      ? excusesDatabase
      : excusesDatabase.filter(item => item.category === currentCategory);

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * filtered.length);
    } while (randomIndex === lastExcuseIndex && filtered.length > 1);

    lastExcuseIndex = randomIndex;
    const selected = filtered[randomIndex];

    excuseText.classList.add('fade-out');

    setTimeout(() => {
      excuseText.textContent = `"${selected.text}"`;
      excuseTag.textContent = categoryLabels[selected.category];
      excuseTag.className = `tag tag-${selected.category}`;
      credibilityScore.textContent = `${selected.credibility}%`;
      excuseTip.textContent = `💡 Dica: ${selected.tip}`;

      if (copyBtn) copyBtn.disabled = false;
      if (whatsappBtn) whatsappBtn.disabled = false;
      resetCopyButton();
      excuseText.classList.remove('fade-out');
    }, 150);
  }

  async function copyExcuse() {
    const cleanText = excuseText.textContent.replace(/^"|"$/g, '');

    try {
      await navigator.clipboard.writeText(cleanText);
      showCopiedState();
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = cleanText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showCopiedState();
    }
  }

  function shareOnWhatsApp() {
    const cleanText = excuseText.textContent.replace(/^"|"$/g, '');
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(cleanText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  function showCopiedState() {
    if (!copyBtn || !copyLabel) return;
    copyBtn.classList.add('copied');
    copyLabel.textContent = 'Copiada!';
    setTimeout(resetCopyButton, 2200);
  }

  function resetCopyButton() {
    if (!copyBtn || !copyLabel) return;
    copyBtn.classList.remove('copied');
    copyLabel.textContent = 'Copiar';
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentCategory = button.dataset.category;
      lastExcuseIndex = -1;
      generateExcuse();
    });
  });

  if (generateBtn) generateBtn.addEventListener('click', generateExcuse);
  if (copyBtn) copyBtn.addEventListener('click', copyExcuse);
  if (whatsappBtn) whatsappBtn.addEventListener('click', shareOnWhatsApp);
});
