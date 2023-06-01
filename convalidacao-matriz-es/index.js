const grade_nova = {
  'Algoritmos 1': { ch: 90 },
  'Introdução a Engenharia de Software': { ch: 30 },
  'Organização de Computadores': { ch: 30 },
  'Fundamentos de Matemática': { ch: 60 },
  'Comunicação Oral e Escrita': { ch: 60 },
  'Inglês Instrumental': { ch: 30 },
  'Algoritmos 2': { ch: 60 },
  'Processo de Produção de Software': { ch: 30 },
  'Sistemas Operacionais': { ch: 60 },
  'Banco de Dados': { ch: 90 },
  'Fundamentos de Ética': { ch: 30 },
  'Matemática Discreta': { ch: 60 },
  'Estrutura de Dados 1': { ch: 90 },
  'Programação Orientada a Objetos 1': { ch: 90 },
  'Requisitos de Software': { ch: 60 },
  'Probabilidade e Estatística': { ch: 60 },
  'Redes de Computadores': { ch: 60 },
  'Estrutura de Dados 2': { ch: 90 },
  'Programação Orientada a Objetos 2': { ch: 90 },
  'Sistemas Distribuídos': { ch: 60 },
  'Programação Web Front-end': { ch: 60 },
  'Interação Homem Computador': { ch: 30 },
  'Empreendedorismo': { ch: 30 },
  'Programação Web Back-end': { ch: 60 },
  'Qualidade de Software': { ch: 60 },
  'Gerenciamento de Projeto de Software': { ch: 60 },
  'Teoria da Computação': { ch: 60 },
  'Segurança da Informação': { ch: 60 },
  'Arquitetura de Software': { ch: 60 },
  'Gerência de Configuração e Manutenção de Software': { ch: 60 },
  'Teste de Software': { ch: 60 },
  'Metodologia de Pesquisa': { ch: 60 },
  'Estratégias de Inovação': { ch: 30 },
  'Oficina de Integração 1': { ch: 120 },
  'Programação para Dispositivos Móveis': { ch: 60, r: true },
  'Programação Web Fullstack': { ch: 60, r: true },
  'Oficina de Integração 2': { ch: 210, r: true },
  'Trabalho de Conclusão de Curso 1': { ch: 30, r: true },
  'Trabalho de Conclusão de Curso 2': { ch: 90, r: true },
  'Estágio Curricular Obrigatório': { ch: 360, r: true },
  'Atividades Complementares': { ch: 180, r: true },

  'Computação em Nuvem': { ch: 60, op: true, r: true },
  'Aprendizado de Máquina': { ch: 60, op: true, r: true },
  'Processamento de Imagens': { ch: 60, op: true, r: true },
  'Mineração de Dados': { ch: 60, op: true, r: true },
  'Libras': { ch: 30, op: true, r: true },
  'A Presença Africana no Brasil': { ch: 30, op: true, r: true },
  'Programação de Banco de Dados': { ch: 60, op: true, r: true },
  'Administração de Banco de Dados': { ch: 60, op: true, r: true },
  'Desenvolvimento de Jogos': { ch: 60, op: true, r: true },
  'Inteligência Artificial': { ch: 60, op: true, r: true },
  'Realidade Estendida': { ch: 60, op: true, r: true },
  'Aprendizagem Profunda': { ch: 60, op: true, r: true },
  'Experimentação em Computação Aplicada': { ch: 60, op: true, r: true },
  'Engenharia Web e DevOps': { ch: 60, op: true, r: true },
  'Internet of Things': { ch: 60, op: true, r: true },
  'Introdução à Gestão de Projetos': { ch: 120, op: true, r: true },

  'Estimativa e Métricas de Software': { ch: 60, op: true, r: true },
  'Manutenção de Software': { ch: 60, op: true, r: true }
};

const grade_antiga = {
  'Algoritmos': { ch: 71, eq: grade_nova['Algoritmos 1'] },
  'Introdução a Engenharia de Software': { ch: 71, eq: grade_nova['Introdução a Engenharia de Software'] },
  'Lógica para Computação': { ch: 57, eq: grade_nova['Fundamentos de Matemática'] },
  'Matemática Discreta': { ch: 57, eq: grade_nova['Matemática Discreta'] },
  'Laboratório de Informática': { ch: 71 },
  'Técnicas de Programação': { ch: 71, eq: grade_nova['Algoritmos 2'] },
  'Processo de Produção de Software': { ch: 71, eq: grade_nova['Processo de Produção de Software'] },
  'Organização de Computadores': { ch: 57, eq: grade_nova['Organização de Computadores'] },
  'Banco de Dados 1': { ch: 71, eq: grade_nova['Banco de Dados'] },
  'Probabilidade e Estatística': { ch: 57, eq: grade_nova['Probabilidade e Estatística'] },
  'Estrutura de Dados': { ch: 71, eq: grade_nova['Estrutura de Dados 1'] },
  'Programação Orientada a Objetos': { ch: 71, eq: grade_nova['Programação Orientada a Objetos 1']},
  'Requisitos de Software': { ch: 71, eq: grade_nova['Requisitos de Software'] },
  'Sistemas Operacionais': { ch: 57, eq: grade_nova['Sistemas Operacionais']},
  'Banco de Dados 2': { ch: 57, eq: grade_nova['Programação de Banco de Dados'] },
  'Interação Humano Computador': { ch: 71, eq: grade_nova['Interação Homem Computador']},
  'Análise e Projeto Orientado a Objetos': { ch: 57, eq: grade_nova['Programação Orientada a Objetos 2'] },
  'Oficina de Integração 1': { ch: 71, eq: grade_nova['Oficina de Integração 1']},
  'Redes de Computadores': { ch: 57, eq: grade_nova['Redes de Computadores'] },
  'Empreendedorismo': { ch: 30, eq: grade_nova['Empreendedorismo'] },
  'Ética, Normas e postura profissional para computação': { ch: 42, eq: grade_nova['Fundamentos de Ética']},
  'Programação Desktop': { ch: 71, eq: grade_nova['Programação Web Fullstack'] },
  'Qualidade de Software': { ch: 42, eq: grade_nova['Qualidade de Software'] },
  'Teste de Software ': { ch: 71, eq: grade_nova['Teste de Software'] },
  'Gerenciamento de Projeto de Software': { ch: 71, eq: grade_nova['Gerenciamento de Projeto de Software'] },
  'Segurança e Auditoria em Sistemas': { ch: 71, eq: grade_nova['Segurança da Informação'] },
  'Programação WEB 1': { ch: 71, eq: grade_nova['Programação Web Front-end'] },
  'Estimativas e Métricas de Software': { ch: 57, eq: grade_nova['Estimativa e Métricas de Software']},
  'Gerência de Configuração': { ch: 57, eq: grade_nova['Gerência de Configuração e Manutenção de Software'] },
  'Oficina de Integração 2': { ch: 30, eq: grade_nova['Oficina de Integração 2']},
  'Teoria da Computação': { ch: 57, eq: grade_nova['Teoria da Computação']},
  'Metodologia de Pesquisa': { ch: 30, eq: grade_nova['Metodologia de Pesquisa']},
  'Programação para Dispositivos Móveis': { ch: 71, eq: grade_nova['Programação para Dispositivos Móveis'] },
  'Programação WEB 2': { ch: 71, eq: grade_nova['Programação Web Back-end'] },
  'Manutenção de Software': { ch: 57, eq: grade_nova['Manutenção de Software'] },
  'Arquitetura de Software': { ch: 71, eq: grade_nova['Arquitetura de Software'] },
  'Programação Distribuída': { ch: 71, eq: grade_nova['Sistemas Distribuídos'] },
  'Optativa Específica 1': { ch: 71, op: true, eq: grade_nova['Computação em Nuvem'] },
  'Optativa Específica 2': { ch: 71, op: true, eq: grade_nova['Desenvolvimento de Jogos'] },
  'Optativa Específica 3': { ch: 71, op: true, eq: grade_nova['Inteligência Artificial'] },
  'Optativa Ciências humanas, sociais e cidadania 1': { ch: 30, eq: grade_nova['Comunicação Oral e Escrita'] },
  'Optativa Ciências humanas, sociais e cidadania 2': { ch: 30, eq: grade_nova['Inglês Instrumental'] },
  'Trabalho de Conclusão de Curso 1': { ch: 60.0, eq: grade_nova['Trabalho de Conclusão de Curso 1'] },
  'Trabalho de Conclusão de Curso 2': { ch: 60.0, r: true, eq: grade_nova['Trabalho de Conclusão de Curso 2'] },
  'Estágio Curricular Obrigatório': { ch: 400, r: true, eq: grade_nova['Estágio Curricular Obrigatório'] },
  'Atividades Complementares': { ch: 180, r: true, eq: grade_nova['Atividades Complementares'] },
}


const ul_grade_antiga = document.querySelector('.selecao.grade.antiga'),
      ul_grade_nova = document.querySelector('.selecao.grade.nova');

const render_sum = (grade, target, opts) => {
  let result = 0,
      ch_done = 0,
      ops_count = 0;
  for (let unidade in grade) {
    const dados = grade[unidade];
    if (dados.op) {
      if (dados.realizado) {
        ops_count++;
        ch_done += dados.ch;
      }
    } else {
      if (!dados.realizado) {
        result += dados.ch;
      }
    }
  }

  if (ops_count < 3 && ch_done < 180)
    opts.classList.remove('OK')
  else
    opts.classList.add('OK')

  result += 180 - Math.min(180, ch_done);

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
