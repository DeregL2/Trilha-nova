# Trilha do Saber · Site do PFC

Página inicial do Projeto Final de Curso **Trilha do Saber**, uma plataforma de simulados para o ENADE.
Bacharelado em Sistemas de Informação, Universidade de Mogi das Cruzes (2026).

Feito com **React + Vite** e **React Router**, com apoio de Inteligência Artificial.

## Páginas

| Rota | Página | O que mostra |
|------|--------|--------------|
| `/` | Início | Apresentação, números, como funciona, perfis e print da plataforma |
| `/projeto` | O Projeto | Problema, justificativa, pesquisa com 21 estudantes, objetivos, limitações |
| `/funcionalidades` | Funcionalidades | Abas por perfil, simulado × prova aplicada, 12 fluxos BPMN |
| `/tecnologias` | Tecnologias | Camadas da arquitetura, diagrama, stack, segurança e LGPD, testes |
| `/simulado` | Simulado Demo | Simulado interativo com cronômetro, marcação para revisão, correção e gabarito |
| `/equipe` | Equipe | Autores e linha do tempo do projeto |

## Como rodar

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (gera a pasta `dist/`).

## Estrutura

```
src/
  components/   Navbar, Footer, Logo, PageHeader (reutilizados em todas as páginas)
  pages/        Uma página por rota
  data/         conteudo.js: todos os textos e dados, separados da interface
  index.css     Estilos globais, com tema claro e escuro
```

## Deploy na Vercel

O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, para que recarregar uma página
como `/projeto` não dê erro 404. Na Vercel: **Add New → Project → importar o repositório**. A Vercel
detecta o Vite sozinha (build `npm run build`, saída `dist`).

## Uso de IA

O código foi gerado com IA a partir de um prompt com o tema (monografia do PFC), a quantidade mínima de
páginas e a tecnologia exigida (React + Vite). Depois disso, o código foi revisado e ajustado:

- Conteúdo extraído da monografia e conferido (números da pesquisa, regras de negócio, tecnologias).
- Identidade visual baseada na plataforma real (roxo `#6d4ae8`).
- Textos e dados centralizados em `src/data/conteudo.js` para facilitar a manutenção.
- Questões do simulado demo escritas para a demonstração (não são questões oficiais do ENADE).
- Teste em tela de celular e em modo escuro.
