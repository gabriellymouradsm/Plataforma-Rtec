# Backlog do Projeto: Plataforma de Gestão de Resíduos e Coleta Seletiva (RTEC)

Este documento detalha o backlog de desenvolvimento do sistema RTEC (EcoTrace Circular System), organizado em Sprints ágeis, com Histórias de Usuário (User Stories), Critérios de Aceite e Tarefas Técnicas granulares.

---

## 🎯 Visão Geral do Produto
Aplicação SPA (Single Page Application) e PWA (Progressive Web Application) para a gestão sustentável, agendamento e triagem de resíduos eletroeletrônicos e reciclados, com geolocalização e foco inicial no município de Franco da Rocha - SP.

---

## 🚀 Sprint 1: Fundação, Autenticação e Módulo Institucional

### US01: Autenticação de Usuário e Cadastro
**Como** cidadão ou colaborador operacional,
**Quero** me cadastrar e realizar login na plataforma com e-mail e senha,
**Para que** eu possa acessar recursos personalizados e gerenciar meus agendamentos de coleta.

* **Critérios de Aceite:**
  * Formulário com validação de formato de e-mail e força de senha.
  * Botão de alternância de visibilidade da senha (mostrar/ocultar).
  * Persistência de sessão local via `localStorage` (com fallback de estado no Supabase).
  * Design responsivo mobile-first seguindo as cores do sistema EcoTrace (Primary `#16a34a` / `#15803d` / gradiente verde).
  * Feedback visual claro em caso de erro de login/cadastro.

* **Tarefas Técnicas:**
  * [ ] Criar estrutura base do HTML (`index.html`) com Tailwind CDN e fontes Google (Space Grotesk e Plus Jakarta Sans).
  * [ ] Implementar módulo JS `auth.js` com funções de `login()`, `register()`, `logout()` e manipulação de `localStorage`.
  * [ ] Criar tela/view de Login e Cadastro responsiva com card em fundo branco (`#ffffff`), bordas `rounded-2xl` e gradiente corporativo no fundo.
  * [ ] Implementar alternador de visibilidade de senha (ícone de olho).

---

### US02: Módulo Institucional ("Sobre a RTEC")
**Como** cidadão consciente,
**Quero** conhecer a proposta socioambiental da RTEC,
**Para que** eu entenda o impacto da reciclagem de eletroeletrônicos e confie no serviço prestado em Franco da Rocha - SP.

* **Critérios de Aceite:**
  * Apresentação clara sobre o combate à poluição e o processamento seguro de e-lixo.
  * Exibição de métricas e indicadores de impacto socioambiental com tipografia Space Grotesk.
  * Layout fluido com navegação simples e botões de chamada para ação (CTA) para agendamento.

* **Tarefas Técnicas:**
  * [ ] Criar a view `about.js` / seção "Sobre" no SPA.
  * [ ] Estilizar os cartões institucionais com gradientes verdes e sombras suaves (`rgba(22, 163, 74, 0.06)`).
  * [ ] Adicionar botão de navegação direta para a tela de agendamento de coleta.

---

## 📅 Sprint 2: Agendamento Inteligente e Rastreabilidade

### US03: Formuário de Agendamento de Coleta
**Como** gerador de resíduo (cidadão ou empresa),
**Quero** solicitar o agendamento de coleta de resíduos informando localização, tipo de material e horário preferencial,
**Para que** a equipe operacional possa recolher meus materiais reciclados/eletrônicos.

* **Critérios de Aceite:**
  * Seleção de perfil do usuário (Cidadão, Empresa, Ponto de Coleta).
  * Presets de localização automática focados em Franco da Rocha - SP (ex: Rodovia Luiz Salomão Chama, Centro, etc.).
  * Seleção flexível de tipos de resíduos (Papelão, CPU, Celular, Pilhas, Placa-Mãe, HD, etc.) com seletores de quantidade/peso.
  * Seleção de data e horário flexíveis.

* **Tarefas Técnicas:**
  * [ ] Implementar a view `schedule.js` / formulário dinâmico de agendamento.
  * [ ] Incluir auto-complete/select com locais estratégicos de Franco da Rocha - SP.
  * [ ] Criar seletores de quantidade/categoria de resíduos interativos.
  * [ ] Validar campos obrigatórios antes do envio.

---

### US04: Rastreabilidade e Geração de Protocolo
**Como** gerador de resíduo ou coletor,
**Quero** receber um código de protocolo numérico único logo após agendar a coleta,
**Para que** eu possa acompanhar e comprovar o status do chamado.

* **Critérios de Aceite:**
  * Geração instantânea de protocolo numérico de 6 dígitos (ex: `597451`).
  * Modal/Card de confirmação com resumo completo do agendamento (itens, local, data, protocolo).
  * Opção de salvar/imprimir comprovante ou copiar o número do protocolo.
  * Alerta visual de segurança em tom âmbar/verde reforçando a importância do protocolo.

* **Tarefas Técnicas:**
  * [ ] Criar gerador de protocolo numérico em `protocol.js`.
  * [ ] Desenvolver modal flutuante com suporte a impressão (`window.print()`) e cópia para área de transferência.
  * [ ] Armazenar o agendamento no `localStorage` sob a chave `rtec_schedules`.

---

## 🛠️ Sprint 3: Painel Operacional, Materiais e Triagem

### US05: Painel de Listagem e Status de Coletas (Operacional)
**Como** operador/colaborador da RTEC,
**Quero** visualizar a lista de resíduos e chamados pendentes em tempo real,
**Para que** eu possa planejar a rota de coleta e atualizar os status.

* **Critérios de Aceite:**
  * Tabela/Lista interativa com filtros por status (`A Coletar`, `Roteirizado`, `Em Triagem`, `Concluído`).
  * Badge de status com cores identificadoras (Verde `#10b981` para `A Coletar`, Azul `#0284c7` para `Roteirizado`, Âmbar `#f59e0b` para `Triagem`).
  * Ações rápidas de alteração de status e visualização de detalhes.

* **Tarefas Técnicas:**
  * [ ] Implementar a view `dashboard.js` do Painel Operacional.
  * [ ] Desenvolver componentes de filtro por status e colaborador.
  * [ ] Atualizar estados no `localStorage` e refletir em tempo real no DOM.

---

### US06: Módulo de Diagnóstico e Gestão de Equipamentos
**Como** técnico de triagem,
**Quero** cadastrar o diagnóstico detalhado dos equipamentos eletrônicos (CPU, Celulares, Placa-Mãe, etc.),
**Para que** seja determinado o destino correto de cada item.

* **Critérios de Aceite:**
  * Cadastro de tipo de equipamento e defeito/problema constatado (ex: Bateria viciada, falha de hardware, tela danificada).
  * Seleção de destino final obrigatório (*Para coleta*, *Para aula*, *Novo destino* / Reciclagem).
  * Emissão e acompanhamento de relatórios de coleta (ex: RTEC 1 e RTEC 2).

* **Tarefas Técnicas:**
  * [ ] Criar a view `triage.js` com formulário de diagnóstico de hardware/e-lixo.
  * [ ] Implementar gerador de relatórios cronológicos por colaborador e tipo de relatório (RTEC 1 / RTEC 2).
  * [ ] Atualizar estoque/destinação final dos itens triados.

---

## 🤖 Sprint 4: Feedback, Assistente Virtual e Recursos PWA

### US07: Módulo de Feedback do Usuário
**Como** cidadão atendido,
**Quero** avaliar o atendimento recebido e dar sugestões,
**Para que** a RTEC possa aprimorar a qualidade do serviço.

* **Critérios de Aceite:**
  * Avaliação por estrelas (1 a 5).
  * Pergunta de recomendação (Sim / Não).
  * Campo de texto livre para observações e sugestões.
  * Modal de agradecimento após envio.

* **Tarefas Técnicas:**
  * [ ] Criar componente de avaliação por estrelas interativo em `feedback.js`.
  * [ ] Armazenar feedbacks no `localStorage` (`rtec_feedbacks`).

---

### US08: Assistente Virtual e Chat Integrado
**Como** usuário da plataforma,
**Quero** tirar dúvidas rápidas com um assistente virtual no chat,
**Para que** eu saiba como descartar materiais específicos ou entender o horário de atendimento.

* **Critérios de Aceite:**
  * Widget de chat flutuante acessível no canto inferior da tela.
  * Respostas automatizadas para perguntas frequentes (horários, materiais aceitos, pontos de coleta em Franco da Rocha, consulta de protocolo).
  * Interface amigável e mensagens instantâneas.

* **Tarefas Técnicas:**
  * [ ] Desenvolver widget de chat flutuante em `assistant.js`.
  * [ ] Mapear base de conhecimento de FAQs da RTEC em respostas programadas.

---

### US09: Recursos PWA, Offline e Persistência
**Como** operador de campo em áreas sem sinal de internet,
**Quero** utilizar a aplicação em modo offline e instalá-la na tela inicial do celular,
**Para que** minhas operações e registros não sejam interrompidos.

* **Critérios de Aceite:**
  * Arquivo `manifest.json` com ícones, nome do app e tema em verde EcoTrace (`#16a34a`).
  * *Service Worker* (`sw.js`) configurado para cache de recursos estáticos e suporte offline.
  * Sincronização automática dos dados salvos no `localStorage` quando a conexão for reestabelecida (com suporte a integração via Supabase API se configurada).

* **Tarefas Técnicas:**
  * [ ] Criar e registrar `manifest.json`.
  * [ ] Implementar `sw.js` com estratégias de cache *Stale-While-Revalidate* para assets estáticos.
  * [ ] Criar detector de status de conexão online/offline com banner informativo no app.
