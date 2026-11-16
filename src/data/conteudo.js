// Conteúdo do site, baseado na monografia "Trilha do Saber" (UMC, 2026).
// Mantido separado dos componentes para facilitar a manutenção.

export const projeto = {
  nome: 'Trilha do Saber',
  slogan: 'Simulados do ENADE com dados de desempenho para alunos, professores e coordenadores.',
  instituicao: 'Universidade de Mogi das Cruzes',
  curso: 'Bacharelado em Sistemas de Informação',
  ano: 2026,
}

export const equipe = [
  { nome: 'Derick Alves Maschio', iniciais: 'DM' },
  { nome: 'Isabella Nicoliche Silva', iniciais: 'IS' },
  { nome: 'Thaíssa Victoria Bianchini de Oliveira', iniciais: 'TO' },
]

// Pesquisa feita pelos autores com 21 estudantes (Microsoft Forms, 2026).
export const pesquisa = [
  { valor: 95.2, texto: 'acham que uma plataforma digital específica facilitaria a preparação' },
  { valor: 90.5, texto: 'acreditam que simulados podem melhorar o desempenho no ENADE' },
  { valor: 47.6, texto: 'apontam falta de tempo para estudar como principal dificuldade' },
  { valor: 47.6, texto: 'consideram a prova difícil' },
  { valor: 38.1, texto: 'dizem conhecer pouco sobre o exame' },
  { valor: 33.3, texto: 'não têm acesso a questões e provas anteriores' },
]

export const destaques = [
  { numero: '35', legenda: 'questões por simulado de treino' },
  { numero: '4', legenda: 'perfis de acesso' },
  { numero: '12', legenda: 'fluxos BPMN modelados' },
  { numero: '2FA', legenda: 'verificação em duas etapas' },
]

export const objetivos = [
  'Organizar o banco de questões do ENADE.',
  'Gerar simulados de treino por curso e permitir que professores e coordenadores apliquem provas.',
  'Implementar quatro perfis de acesso com permissões específicas.',
  'Produzir dashboards de desempenho indicando temas de maior e menor domínio.',
  'Permitir o cadastro e a manutenção contínua de provas e questões.',
]

export const perfis = [
  {
    id: 'aluno',
    nome: 'Aluno',
    icone: '🎓',
    resumo: 'Treina com questões reais de edições anteriores e acompanha a própria evolução.',
    recursos: [
      'Simulado de treino com até 35 questões sorteadas do curso, sem limite de tempo',
      'Correção automática com acertos, erros, tempo e gabarito',
      'Provas aplicadas com cronômetro controlado pelo servidor',
      'Marcar questões para revisão durante a prova',
      'Dashboard individual com gráficos de desempenho',
      'Ranking da turma (a partir de 3 simulados finalizados)',
      'Reporte de problemas em questões',
    ],
  },
  {
    id: 'professor',
    nome: 'Professor',
    icone: '👩‍🏫',
    resumo: 'Cria provas com questões do banco e enxerga onde as turmas mais erram.',
    recursos: [
      'Criação de provas aplicadas com até 60 questões',
      'Escolha de turmas ou alunos, horário de abertura e encerramento',
      'Opção de reter o gabarito e encerrar a prova se o aluno sair da tela',
      'Painel das turmas e questões com maior taxa de erro',
      'Exportação dos resultados em CSV',
    ],
  },
  {
    id: 'coordenador',
    nome: 'Coordenador',
    icone: '🧭',
    resumo: 'Administra o curso: usuários, turmas, banco de questões e indicadores.',
    recursos: [
      'Importação de provas e gabaritos em PDF',
      'Revisão, correção e desativação de questões',
      'Importação de alunos e professores por planilha (CSV/XLSX)',
      'Aprovação de solicitações de acesso',
      'Painéis por curso e comparativo entre cursos',
      'Ativar ou desativar 2FA em lote',
    ],
  },
  {
    id: 'adm',
    nome: 'Administrador',
    icone: '🛡️',
    resumo: 'Visão geral da plataforma, coordenadores, reportes e conformidade.',
    recursos: [
      'Aprovação de cadastros de coordenadores',
      'Análise de reportes de problemas em questões',
      'Solicitações de exclusão e anonimização (LGPD)',
      'Consulta aos logs de auditoria',
      'Importação de provas para qualquer curso',
    ],
  },
]

export const fluxos = [
  'Login com verificação em duas etapas',
  'Primeiro acesso de usuário importado',
  'Recuperação de senha',
  'Autocadastro e aprovação de acesso',
  'Importação de alunos e professores por planilha',
  'Importação de prova e manutenção do banco de questões',
  'Simulado de treino',
  'Criação de prova aplicada',
  'Realização da prova aplicada',
  'Acompanhamento do desempenho',
  'Exclusão ou anonimização da conta (LGPD)',
  'Reporte de problema em questão',
]

export const tecnologias = [
  { grupo: 'Back-end', itens: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Apache PDFBox', 'Maven'] },
  { grupo: 'Front-end', itens: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'Chart.js'] },
  { grupo: 'Dados', itens: ['PostgreSQL', 'Supabase'] },
  { grupo: 'Infra e integrações', itens: ['Render', 'Docker', 'GitHub', 'Resend (e-mail)'] },
  { grupo: 'Testes', itens: ['JUnit', 'Mockito', 'JaCoCo', 'H2'] },
]

export const camadas = [
  { nome: 'Usuários', desc: 'Aluno, Professor, Coordenador e ADM' },
  { nome: 'Front-end', desc: 'Thymeleaf, HTML, CSS, JS e Chart.js' },
  { nome: 'Segurança', desc: 'Spring Security, BCrypt, CSRF, 2FA e limite de tentativas' },
  { nome: 'Back-end (MVC)', desc: 'Controllers, services, configs, repositories e model' },
  { nome: 'Persistência', desc: 'PostgreSQL no Supabase via JPA/Hibernate' },
]

export const seguranca = [
  { titulo: 'Senhas com BCrypt', texto: 'Nunca em texto puro. Política única: mínimo de 8 caracteres com letra, número e caractere especial.' },
  { titulo: 'Verificação em duas etapas', texto: 'Código de 6 dígitos válido por 10 minutos, enviado por e-mail via Resend.' },
  { titulo: 'Proteção contra força bruta', texto: 'Após 5 falhas, o e-mail fica bloqueado por 15 minutos. Mensagem de erro genérica.' },
  { titulo: 'Recuperação segura', texto: 'Link de uso único (256 bits), válido por 1 hora; o banco guarda apenas o hash SHA-256.' },
  { titulo: 'Auditoria', texto: 'Logins, cadastros, alterações, exclusões e anonimizações ficam registrados com IP e duração.' },
  { titulo: 'LGPD', texto: 'Coleta mínima, aceite do termo, exclusão lógica e anonimização mantendo dados estatísticos.' },
]

// Questões de exemplo escritas para a demonstração (não são questões oficiais do ENADE).
export const questoesDemo = [
  {
    tema: 'Banco de Dados',
    enunciado: 'Em um banco relacional, qual recurso garante que um valor de chave estrangeira sempre corresponda a uma chave primária existente na tabela referenciada?',
    alternativas: ['Normalização', 'Integridade referencial', 'Índice composto', 'Visão materializada', 'Gatilho de auditoria'],
    correta: 1,
    explicacao: 'A integridade referencial impede registros "órfãos", rejeitando valores de FK sem correspondência na tabela pai.',
  },
  {
    tema: 'Engenharia de Software',
    enunciado: 'No padrão MVC, qual componente recebe a requisição do usuário, aciona a lógica de negócio e escolhe a resposta a ser exibida?',
    alternativas: ['Model', 'View', 'Controller', 'Repository', 'Template'],
    correta: 2,
    explicacao: 'O Controller faz a ponte entre a View e o Model, tratando as requisições e decidindo o que renderizar.',
  },
  {
    tema: 'Segurança da Informação',
    enunciado: 'Por que é recomendado armazenar senhas com funções como BCrypt em vez de SHA-256 simples?',
    alternativas: [
      'Porque BCrypt gera hashes menores',
      'Porque BCrypt é reversível pelo administrador',
      'Porque BCrypt é lento de propósito e usa salt, dificultando ataques de força bruta',
      'Porque SHA-256 não funciona com caracteres especiais',
      'Porque BCrypt dispensa o uso de HTTPS',
    ],
    correta: 2,
    explicacao: 'BCrypt tem custo configurável e salt embutido, o que torna ataques por dicionário e rainbow tables muito mais caros.',
  },
  {
    tema: 'Redes de Computadores',
    enunciado: 'Qual protocolo da camada de transporte oferece entrega confiável e ordenada dos dados por meio de confirmações (ACK)?',
    alternativas: ['UDP', 'IP', 'ICMP', 'TCP', 'ARP'],
    correta: 3,
    explicacao: 'O TCP é orientado à conexão e usa números de sequência e confirmações para garantir entrega confiável.',
  },
  {
    tema: 'Algoritmos',
    enunciado: 'Qual é a complexidade de tempo da busca binária em um vetor ordenado de n elementos, no pior caso?',
    alternativas: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
    correta: 1,
    explicacao: 'A cada passo, a busca binária descarta metade do vetor, resultando em O(log n) comparações.',
  },
]
