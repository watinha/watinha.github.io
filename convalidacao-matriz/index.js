const grade_nova = {
	'Desenvolvimento Sem Código': { ch: 30 },
	'Fundamentos de Programação': { ch: 90 },
	'Lógica e Introdução à Estatística': { ch: 60 },
	'Introdução aos Sistemas Operacionais': { ch: 30 },
	'Introdução a Análise e Desenvolvimento de Sistemas': { ch: 30 },
	'Comunicação Oral e Escrita': { ch: 60 },
	'Programação Orientada a Objetos': { ch: 90 },
	'Empreendedorismo': { ch: 30 },
	'Banco de Dados': { ch: 60 },
	'Inglês Instrumental': { ch: 30 },
	'Interação Homem Computador': { ch: 30 },
	'Programação Web Front-end': { ch: 60 },
	'Programação Web Back-end': { ch: 60 },
	'Estrutura de Dados': { ch: 60 },
	'Desenvolvimento Ágil': { ch: 60 },
	'Redes de Computadores': { ch: 60 },
	'Economia': { ch: 30 },
	'Estratégias de Inovação': { ch: 30 },
	'Programação Web Fullstack': { ch: 60 },
	'Arquitetura de Software': { ch: 60 },
	'Estratégias de Programação': { ch: 60 },
	'Disciplina Certificadora Comum': { ch: 120, r: true },
	'Disciplina Certificadora Identitária': { ch: 120, r: true},
	'Disciplina Certificadora Específica': { ch: 300, r: true },
	'Teste de Software': { ch: 60, r: true, op: true },
	'Computação em Nuvem': { ch: 60, r: true, op: true },
	'Programação para Dispositivos Móveis': { ch: 60, r: true, op: true },
	'Aprendizado de Máquina': { ch: 60, r: true, op: true },
	'Processamento de Imagens': { ch: 60, r: true, op: true },
	'Mineração de Dados': { ch: 60, r: true, op: true },
	'Engenharia de Requisitos': { ch: 60, r: true, op: true },
	'Gerenciamento de Projeto de Software': { ch: 60, r: true, op: true },
};

const grade_antiga = {
	'Laboratório de Informática': { ch: 60, eq: grade_nova['Desenvolvimento Sem Código'] },
	'Algoritmos': { ch: 60, eq: grade_nova['Fundamentos de Programação'] },
	'Fundamentos de Matemática': { ch: 60, eq: grade_nova['Lógica e Introdução à Estatística'] },
	'Organização de Computadores': { ch: 30 },
	'Introdução a Análise e Desenvolvimento de Sistemas': { ch: 30, eq: grade_nova['Introdução a Análise e Desenvolvimento de Sistemas'] },
	'Comunicação Oral e Escrita': { ch: 60, eq: grade_nova['Comunicação Oral e Escrita'] },
	'Programação Orientada a Objetos': { ch: 60, eq: grade_nova['Programação Orientada a Objetos'] },
	'Engenharia de Software': { ch: 30, eq: grade_nova['Desenvolvimento Ágil'] },
	'Banco de Dados 1': { ch: 60, eq: grade_nova['Banco de Dados'] },
	'Inglês Instrumental': { ch: 30, eq: grade_nova['Inglês Instrumental'] },
	'Estatística': { ch: 60 },
	'Técnicas de Programação': { ch: 60, eq: grade_nova['Estratégias de Programação'] },
	'Programação Desktop': { ch: 60, eq: grade_nova['Programação Web Front-end'] },
	'Estrutura de Dados': { ch: 60, eq: grade_nova['Estrutura de Dados'] },
	'Banco de Dados 2': { ch: 60 },
	'Sistemas Operacionais': { ch: 60, eq: grade_nova['Introdução aos Sistemas Operacionais'] },
	'Análise e Projeto Orientado a Objetos': { ch: 60 },
	'Programação Web': { ch: 60, eq: grade_nova['Programação Web Back-end'] },
	'Gerenciamento de Projetos de Software': { ch: 60, eq: grade_nova['Gerenciamento de Projeto de Software'] },
	'Banco de Dados 3': { ch: 60 },
	'Redes de Computadores': { ch: 60, eq: grade_nova['Redes de Computadores'] },
	'Oficina de Integração': { ch: 30 },
	'Metodologia de Pesquisa': { ch: 30 },
	'Programação Móvel': { ch: 60, eq: grade_nova['Programação para Dispositivos Móveis'] },
	'Gestão Financeira': { ch: 30 },
	'Arquitetura de Software': { ch: 60, eq: grade_nova['Arquitetura de Software'] },
	'Interação Homem Computador': { ch: 60, eq: grade_nova['Interação Homem Computador'] },
	'Economia': { ch: 30, eq: grade_nova['Economia'] },
	'Gestão Empresarial': { ch: 30, eq: grade_nova['Estratégias de Inovação'] },
	'Empreendedorismo': { ch: 30, eq: grade_nova['Empreendedorismo'] },
	'Programação Distribuída': { ch: 60 },
	'Segurança e Auditoria de Sistemas': { ch: 60 },
	'Qualidade de Software': { ch: 30 },
	'Tópicos em Computação': { ch: 60, eq: grade_nova['Programação Web Fullstack'] }
};

const ul_grade_antiga = document.querySelector('.selecao.grade.antiga'),
      ul_grade_nova = document.querySelector('.selecao.grade.nova'),
      sum_grade_antiga = document.querySelector('.selecao.grade.antiga span'),
      sum_grade_nova = document.querySelector('.selecao.grade.nova span');

const render_sum = (grade, target) => {
  let result = 0,
      ops_count = 0;
  for (let unidade in grade) {
    const dados = grade[unidade];
    if (dados.op) {
      if (dados.realizado)
        ops_count++;
    } else {
      if (!dados.realizado)
        result += dados.ch;
    }
  }
  result += 180 - Math.min(180, ops_count * 60);

  target.innerHTML = `${result}h`;
}

const render_grade = (grade, target) => {
  target.innerHTML = '';
  for (unidade in grade) {
    const li = document.createElement('li'),
          dados = grade[unidade];
    li.innerHTML = `${unidade} - ${dados.ch}h ${dados.r ? '(REMOTA)' : ''} ${dados.op ? '(OPTATIVA)' : ''}`;
    if (dados.realizado)
      li.classList.add('realizado');
    if (dados.op)
      li.classList.add('optativa');

    (() => {
      const cur = unidade;
      li.addEventListener('click', function () {
        if (!grade[cur].realizado) {
          this.classList.add('realizado');
          grade[cur].realizado = true;
          if (grade[cur].eq) {
            grade[cur].eq.realizado = true;
            render_grade(grade_nova, ul_grade_nova);
          }
        } else {
          this.classList.remove('realizado');
          grade[cur].realizado = false;
          if (grade[cur].eq) {
            grade[cur].eq.realizado = false;
            render_grade(grade_nova, ul_grade_nova);
          }
        }
        render_sum(grade, target.parentElement.querySelector('span'));
      });
    })();

    target.appendChild(li);
    render_sum(grade, target.parentElement.querySelector('span'));
  }
}

(() => {
  render_grade(grade_antiga, ul_grade_antiga);
  render_grade(grade_nova, ul_grade_nova);
})();
