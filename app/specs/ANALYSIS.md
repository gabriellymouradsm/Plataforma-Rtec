# Relatório de Análise Técnica e Unificação do Design System (RTEC)

**Data:** Outubro/2026
**Projeto:** Plataforma RTEC (EcoTrace Circular System)
**Autor:** Jules (IA Agent)

---

## 1. Resumo Executivo
Este relatório consolidado analisa as especificações funcionais (`spec.md`), a arquitetura de design (`DESIGN.md`), as diretrizes de desenvolvimento (`Agents.md`) e os arquivos visuais presentes no diretório `app/Theme/`. O objetivo é unificar decisões de design, alinhar regras de negócio críticas e estabelecer uma base técnica consistente para a implementação da Single Page Application (SPA) e Progressive Web Application (PWA).

---

## 2. Unificação da Identidade Visual e Design System

### 2.1 Alinhamento da Paleta de Cores
Identificamos duas definições complementares no projeto:
1. `spec.md`: Foco em verdes vibrantes corporativos (`#15803d` a `#22c55e`), fundos brancos para cartões (`#ffffff`) e cores de alerta/status.
2. `DESIGN.md`: Especificação detalhada do **EcoTrace Circular System** (Material Design 3 / Tailwind), definindo variações de superfície, elevações e gradientes.

**Decisão Unificada de Cores:**

| Elemento | Token Tailwind / Hex | Descrição & Uso |
| :--- | :--- | :--- |
| **Primary (Brand)** | `#16a34a` (`green-600`) | Ações principais, botões CTA, nós confirmados. |
| **Primary Dark** | `#15803d` (`green-700`) | Hover, cabeçalhos, gradiente terminal topo. |
| **Primary Light** | `#22c55e` (`green-500`) | Indicadores de tendência, marcações ativas, gradiente inicial. |
| **Secondary / Eco Accent** | `#10b981` (`emerald-500`) | Selos de validação, contadores zero-waste, badges "A Coletar". |
| **Tertiary / Informática** | `#0284c7` (`sky-600`) | Manifestos, dados de transporte, badge "Roteirizado". |
| **Warning / Triagem** | `#f59e0b` (`amber-500`) | Alertas de triagem, bateria/perigosos, badge "Em Triagem". |
| **Surface Background** | `#f8fafc` (`slate-50`) | Fundo geral da aplicação SPA. |
| **Surface Elevated** | `#ffffff` (`white`) | Cards funcionais, modais flutuantes, containers de formulário. |
| **Text Foreground** | `#0f172a` (`slate-900`) | Títulos, valores de impacto e textos primários. |
| **Text Muted** | `#64748b` (`slate-500`) | Subtítulos, rótulos de campos e dados secundários. |

### 2.2 Tipografia Unificada
* **Títulos e Métricas:** `Space Grotesk` (Google Fonts) — Estilo futurista e técnico para números de protocolos, peso de resíduos e cabeçalhos.
* **Corpo e Controles:** `Plus Jakarta Sans` (Google Fonts) — Legibilidade máxima em telas móveis e formulários.

### 2.3 Raio de Arredondamento e Sombras
* **Cards e Inputs:** `rounded-2xl` (`1rem` / `16px`).
* **Botões e Badges:** Pill geometry (`rounded-full`) com altura de área de toque confortável (mínimo 48px).
* **Elevação:** Sombra suave com matiz de esmeralda: `box-shadow: 0 4px 20px -2px rgba(22, 163, 74, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.

---

## 3. Regras de Negócio e Arquitetura do Sistema

### 3.1 Geolocalização e Presets de Franco da Rocha - SP
A plataforma é otimizada para o município de Franco da Rocha - SP. O módulo de agendamento conterá atalhos pré-configurados para pontos chave da região:
* Rodovia Luiz Salomão Chama, Franco da Rocha - SP
* Centro de Triagem Municipal RTEC - Franco da Rocha - SP
* Parque Municipal Benedito Bueno de Morais - SP
* Campo Limpo Paulista / Região Limítrofe

### 3.2 Lógica de Geração do Protocolo Único
* **Formato:** Código numérico de 6 dígitos formatado (ex: `597451`).
* **Geração:** Utiliza timestamp e fator aleatório para garantir unicidade em ambiente local/offline.
* **Comprovante:** O sistema gera um modal visual com o resumo da solicitação e opções de copiar protocolo ou imprimir via `window.print()`.

### 3.3 Estratégia de Persistência Local e Supabase Fallback
* **Primary Store:** `localStorage` do navegador sob as chaves:
  * `rtec_user_session` (Sessão do usuário)
  * `rtec_schedules` (Lista de agendamentos)
  * `rtec_triage_items` (Itens e diagnósticos de triagem)
  * `rtec_feedbacks` (Avaliações dos usuários)
* **Supabase Integration Strategy:** Estrutura assíncrona desacoplada que sincroniza o `localStorage` com as tabelas SQL do Supabase quando houver conexão com a internet ativa.

---

## 4. Estrutura Modular SPA e PWA

A aplicação utilizará Vanilla JS modular carregado dinamicamente no `index.html`:

```
app/
├── index.html               # SPA Shell (Tailwind CDN, Fontes, Container do App)
├── manifest.json            # PWA Manifest (ícones, nome, cores de tema)
├── sw.js                    # Service Worker (Cache offline & PWA)
├── css/
│   └── custom.css           # Estilos complementares (Glassmorphism, animações)
└── js/
    ├── app.js               # Roteador de views, gerenciador de estado e inicialização
    ├── auth.js              # Módulo de Autenticação & Cadastro
    ├── schedule.js          # Módulo de Agendamento e Geolocalização
    ├── protocol.js          # Módulo de Rastreabilidade e Impressão de Protocolo
    ├── dashboard.js         # Painel Operacional e Lista de Coletas
    ├── triage.js            # Diagnóstico de Equipamentos e Relatórios (RTEC 1 / RTEC 2)
    ├── feedback.js          # Módulo de Avaliação por Estrelas
    └── assistant.js         # Assistente Virtual / Chatbot flutuante
```

---

## 5. Conclusão
Com a unificação visual e técnica documentada neste relatório e o backlog detalhado em `app/specs/backlog.md`, a base de especificações do projeto RTEC está 100% clara, robusta e alinhada com todas as diretrizes.
