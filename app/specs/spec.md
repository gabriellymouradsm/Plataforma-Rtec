
# SPEC: Plataforma de Gestão de Resíduos e Coleta Seletiva (RTEC)

### Contexto

Aplicação SPA (Single Page Application) e PWA (Progressive Web Application) desenvolvida em HTML5, CSS3 e JavaScript Puro (Vanilla), utilizando Tailwind CSS via CDN para estilização ágil e responsiva com abordagem _Mobile First_. Concebida para conectar geradores de resíduos, cidadãos, colaboradores e equipes operacionais na triagem, agendamento e gerenciamento sustentável de eletrônicos e materiais recicláveis.

  

### Requisitos Funcionais

-   **Módulo de Autenticação e Cadastro:**
    
      
    -   Telas de Login e Registro de novos usuários com validação de e-mail e senha segura (com alternador de visibilidade de senha).
        
          
        
-   **Módulo Institucional ("Sobre"):**
    
      
    -   Apresentação clara da proposta socioambiental da RTEC, destacando a importância do processamento seguro e combate à poluição.
        
          
        
-   **Agendamento de Coleta Inteligente:**
    
      
    -   Formulário dinâmico contendo localização automática baseada em pontos estratégicos (ex: Rodovia Luiz Salomão Chama, Franco da Rocha - SP), seleção de perfil do usuário, tipo de resíduo, data e horário flexíveis.
        
          
        
-   **Rastreabilidade e Protocolo:**
    
      
    -   Geração instantânea de um código de protocolo numérico único (ex: `597451`), resumo detalhado do chamado e opções de impressão/comprovante.
        
          
        
-   **Painel de Materiais e Coleta (Operacional):**
    
      
    -   Listagem em tempo real de resíduos disponíveis e quantidades (ex: Papelão, Computadores, Celulares, Pilhas) com marcações de status (`A Coletar`).
        
          
        
-   **Gestão e Diagnóstico de Equipamentos:**
    
      
    -   Configurações detalhadas para cadastro de tipos de materiais (CPU, Celulares, Placa-Mãe, HD), mapeamento de defeitos/problemas (Bateria viciada, falhas de hardware, tela danificada) e definição de destinos finais (_Para coleta_, _Para aula_, _Novo destino_).
        
          
        
-   **Feedback e Assistente Virtual:**
    
      
    -   Módulo de avaliação do usuário com notas por estrelas, recomendação (Sim/Não) e chat integrado de assistência rápida.
        
          
        

### Recursos Especiais (Diferenciais de Execução)

-   **PWA (Progressive Web Application):**
    
      
    -   Configuração de _Service Workers_ e manifest file para acesso simplificado offline/online e instalação rápida na tela inicial de smartphones.
        
          
        
-   **Persistência Local (localStorage):**
    
      
    -   Salvamento contínuo de agendamentos, doações e preferências para resguardar o fluxo operacional mesmo sem conexão constante com o servidor.
        
          
        
-   **Filtros e Relatórios Dinâmicos:**
    
      
    -   Acompanhamento histórico de relatórios de coleta emitidos no sistema (ex: Rtec 1 e Rtec 2) e listagem cronológica de chamados por colaborador.
        
          
        

### Stack

-   **Frontend:** HTML5, CSS3, JavaScript (Vanilla), Tailwind CSS (via CDN).
    
      
    
-   **Arquitetura:** SPA (Single Page Application) orientada a componentes modulares em arquivos estáticos.
    
      
    
-   **Hospedagem & PWA:** GitHub Pages com suporte a manifest e cache local.
    
      
    
-   **Banco de Dados / Persistência:** Supabase (SQL) para tabelas de usuários, agendamentos, materiais e relatórios de triagem.
    
      
    

### UI / UX e Identidade Visual

-   **Mobile First:** Botões grandes, formulários com áreas de toque confortáveis, navegação fluida por menu lateral retrátil e layout vertical otimizado para uso em campo.
    
      
    
-   **Identidade Ecológica / Sustentável:** Paleta de cores focada em tons de verde corporativo e sustentável (`#22c55e` / tons degradê de verde nos fundos institucionais) combinados com off-white e cinza claro nos cards de conteúdo.
    
      
    
-   **Micro-interações:** Transições suaves de carregamento, modais de confirmação com ícones de sucesso e botões de ação destacados para conversão rápida.
    
      
    

### Instruções para Agentes de IA

-   Manter a simplicidade estrutural usando Vanilla JS sem frameworks pesados (como React ou Vue), priorizando arquivos limpos e legíveis.
    
      
    
-   Garantir total responsividade das telas (Login, Agendamento, Painel Operacional e Configurações) para que simulem perfeitamente a experiência de um aplicativo mobile nativo.
    
      
    
-   Respeitar rigorosamente a nomenclatura de classes e IDs voltada aos fluxos descritos nos relatórios e slides da RTEC.
    
      
### Paleta de Cores e Identidade Visual

-   **Fundo de Telas de Acesso (Login, Cadastro e Sobre):** Gradiente vertical ou diagonal em tons de verde vibrante e corporativo (variando de `#15803d` a `#22c55e`), remetendo ao ecossistema sustentável.
    
      
    
-   **Cards e Superfícies:** Fundo totalmente branco (`#ffffff`) com cantos arredondados acentuados (`rounded-2xl`) e sombras suaves, destacando os formulários e caixas de diálogo sobre o fundo verde.
    
      
    
-   **Tipografia e Textos Principais:** Cores escuras de alta legibilidade (como `#1e293b` ou tons de verde escuro como `#14532d`) aplicadas em títulos e labels para garantir contraste em dispositivos móveis.
    
      
    
## **Cores de Status e Ações:**
    
      
    -   **Verde de Sucesso/Coleta (`#10b981` / `#16a34a`):** Utilizado em botões de confirmação (`Agendar Coleta`, `Cadastrar`), badges de itens `A Coletar` e indicadores de sucesso de protocolo.
        
          
        
    -   **Alertas e Avisos (`#f59e0b`):** Destinado a avisos importantes de triagem e orientações de segurança para salvamento de protocolos.    

### O que Pode e O que Não Pode Fazer

-   **O que PODE:** Utilizar manipulação direta do DOM via JavaScript puro, salvar estados localmente no navegador, criar modais flutuantes para protocolos e simular o assistente virtual com respostas programadas.
    
      
    
-   **O que NÃO PODE:** Utilizar frameworks complexos que exijam build steps avançados (manter a simplicidade da SPA pura), esquecer a responsividade mobile ou omitir os campos essenciais de rastreabilidade (como o número do protocolo e endereços de Franco da Rocha).
    
      
    

-   Registro de Backlog (`/spec/backlog.md`) estruturado e pronto para guiar o desenvolvimento das próximas sprints!
