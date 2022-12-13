const grade_nova = {
	'Desenvolvimento Sem Código': { ch: 30 },
	'Fundamentos de Programação': { ch: 120 },
	'Lógica e Introdução à Estatística': { ch: 60 },
	'Introdução aos Sistemas Operacionais': { ch: 30 },
	'Introdução a Análise e Desenvolvimento de Sistemas': { ch: 30 },
	'Comunicação Oral e Escrita': { ch: 60 },
	'Programação Orientada a Objetos': { ch: 120 },
	'Empreendedorismo': { ch: 30 },
	'Banco de Dados': { ch: 90 },
	'Inglês Instrumental': { ch: 30 },
	'Interação Homem Computador': { ch: 30 },
	'Programação Web Front-end': { ch: 60 },
	'Programação Web Back-end': { ch: 60 },
	'Estrutura de Dados': { ch: 90 },
	'Desenvolvimento Ágil': { ch: 60 },
	'Redes de Computadores': { ch: 60 },
	'Economia': { ch: 30 },
	'Estratégias de Inovação': { ch: 30 },
	'Programação Web Fullstack': { ch: 90 },
	'Arquitetura de Software': { ch: 90 },
	'Estratégias de Programação': { ch: 90 },
	'Teste de Software': { ch: 60, r: true, op: true },
	'Computação em Nuvem': { ch: 60, r: true, op: true },
	'Programação para Dispositivos Móveis': { ch: 60, r: true, op: true },
	'Inteligência Artificial': { ch: 60, r: true, op: true },
	'Aprendizado de Máquina': { ch: 60, r: true, op: true },
	'Aprendizagem Profunda': { ch: 60, r: true, op: true },
	'Processamento de Imagens': { ch: 60, r: true, op: true },
	'Mineração de Dados': { ch: 60, r: true, op: true },
	'Realidade Extendida': { ch: 60, r: true, op: true },
	'Engenharia de Requisitos': { ch: 60, r: true, op: true },
	'Engenharia Web e DevOps': { ch: 60, r: true, op: true },
	'Gerenciamento de Projeto de Software': { ch: 60, r: true, op: true },
	'Análise e Projeto Orientado a Objetos': { ch: 60, r: true, op: true },
	'Banco de Dados 2': { ch: 60, op: true },
	'Banco de Dados 3': { ch: 60, op: true },
	'Programação Distribuída': { ch: 60, op: true },
	'Segurança e Auditoria de Sistemas': { ch: 60, op: true },
	'Disciplina Certificadora Comum': { ch: 120, r: true },
	'Disciplina Certificadora Identitária': { ch: 120, r: true},
	'Disciplina Certificadora Específica': { ch: 300, r: true },
  'Estágio Curricular Obrigatório': { ch: 360, r: true },
};

const grade_antiga = {
	'Laboratório de Informática': { ch: 71, eq: grade_nova['Desenvolvimento Sem Código'] },
	'Algoritmos': { ch: 71, eq: grade_nova['Fundamentos de Programação'] },
	'Fundamentos de Matemática': { ch: 71, eq: grade_nova['Lógica e Introdução à Estatística'] },
	'Organização de Computadores': { ch: 35 },
	'Introdução a Análise e Desenvolvimento de Sistemas': { ch: 35, eq: grade_nova['Introdução a Análise e Desenvolvimento de Sistemas'] },
	'Comunicação Oral e Escrita': { ch: 71, eq: grade_nova['Comunicação Oral e Escrita'] },
	'Programação Orientada a Objetos': { ch: 71, eq: grade_nova['Programação Orientada a Objetos'] },
	'Engenharia de Software': { ch: 35, eq: grade_nova['Desenvolvimento Ágil'] },
	'Banco de Dados 1': { ch: 71, eq: grade_nova['Banco de Dados'] },
	'Inglês Instrumental': { ch: 35, eq: grade_nova['Inglês Instrumental'] },
	'Estatística': { ch: 71 },
	'Técnicas de Programação': { ch: 71, eq: grade_nova['Estratégias de Programação'] },
	'Programação Desktop': { ch: 71, eq: grade_nova['Programação Web Front-end'] },
	'Estrutura de Dados': { ch: 71, eq: grade_nova['Estrutura de Dados'] },
	'Banco de Dados 2': { ch: 71, eq: grade_nova['Banco de Dados 2'] },
	'Sistemas Operacionais': { ch: 71, eq: grade_nova['Introdução aos Sistemas Operacionais'] },
	'Análise e Projeto Orientado a Objetos': { ch: 71, eq: grade_nova['Análise e Projeto Orientado a Objetos'] },
	'Programação Web': { ch: 71, eq: grade_nova['Programação Web Back-end'] },
	'Gerenciamento de Projetos de Software': { ch: 71, eq: grade_nova['Gerenciamento de Projeto de Software'] },
	'Banco de Dados 3': { ch: 71, eq: grade_nova['Banco de Dados 3'] },
	'Redes de Computadores': { ch: 71, eq: grade_nova['Redes de Computadores'] },
	'Oficina de Integração': { ch: 68, eq: grade_nova['Disciplina Certificadora Específica'] },
	'Metodologia de Pesquisa': { ch: 35 },
	'Programação Móvel': { ch: 71, eq: grade_nova['Programação para Dispositivos Móveis'] },
	'Arquitetura de Software': { ch: 71, eq: grade_nova['Arquitetura de Software'] },
	'Interação Homem Computador': { ch: 71, eq: grade_nova['Interação Homem Computador'] },
	'Programação Distribuída': { ch: 71, eq: grade_nova['Programação Distribuída'] },
	'Segurança e Auditoria de Sistemas': { ch: 71, eq: grade_nova['Segurança e Auditoria de Sistemas'] },
	'Qualidade de Software': { ch: 35 },
	'Tópicos em Computação': { ch: 71, eq: grade_nova['Programação Web Fullstack'] },
	'Gestão Financeira': { ch: 35, op: true },
	'Economia': { ch: 35, eq: grade_nova['Economia'], op: true },
	'Gestão Empresarial': { ch: 35, eq: grade_nova['Estratégias de Inovação'], op: true },
	'Empreendedorismo': { ch: 35, eq: grade_nova['Empreendedorismo'], op: true },
  'Atividades Complementares': { ch: 180, r: true },
  'Estágio Curricular Obrigatório': { ch: 400, r: true, eq: grade_nova['Estágio Curricular Obrigatório'] }
};

const ul_grade_antiga = document.querySelector('.selecao.grade.antiga'),
      ul_grade_nova = document.querySelector('.selecao.grade.nova');

const render_sum = (grade, target, opts) => {
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

  if (ops_count < 3)
    opts.classList.remove('OK')
  else
    opts.classList.add('OK')

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
        render_sum(grade, target.parentElement.querySelector('span'), target.parentElement.querySelector('.optativas span'));
      });
    })();

    target.appendChild(li);
    render_sum(grade, target.parentElement.querySelector('span'), target.parentElement.querySelector('.optativas span'));
  }
}

(() => {
  render_grade(grade_antiga, ul_grade_antiga);
  render_grade(grade_nova, ul_grade_nova);
})();
