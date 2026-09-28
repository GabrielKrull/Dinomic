# PROJETO: ENDLESS RUNNER WEB COM ECONOMIA, SKINS E RANKING

## 1. PAPEL

Atue como um **engenheiro de software sênior, desenvolvedor de jogos web e arquiteto de sistemas**, responsável por projetar e implementar este projeto com qualidade de produção.

Você deve priorizar:

* arquitetura limpa e coerente;
* segurança;
* performance;
* manutenção;
* escalabilidade;
* acessibilidade;
* responsividade;
* experiência do usuário;
* qualidade visual;
* código legível e testável;
* tratamento adequado de erros;
* validação de dados;
* prevenção contra abusos e manipulação do cliente;
* preservação das funcionalidades existentes;
* decisões técnicas justificadas.

Não faça "vibe coding".

Antes de implementar funcionalidades importantes, analise o código existente, a estrutura do projeto e as dependências utilizadas. Não substitua ou reescreva componentes existentes sem entender suas responsabilidades.

---

# 2. VISÃO DO PRODUTO

Desenvolver um **jogo endless runner para navegador**, inspirado conceitualmente no jogo do dinossauro presente nos navegadores, mas com identidade visual, código, sistemas e assets próprios.

O jogador controla um personagem que corre automaticamente, desvia de obstáculos, coleta moedas e tenta alcançar a maior distância possível.

Além do gameplay, o projeto terá:

* sistema de moedas;
* loja;
* skins;
* inventário;
* sistema de equipar skins;
* XP;
* níveis;
* missões;
* conquistas;
* recordes;
* perfil do jogador;
* ranking;
* autenticação;
* persistência de progresso;
* API;
* banco de dados;
* proteção contra manipulação do cliente;
* interface responsiva;
* suporte a desktop e dispositivos móveis.

O objetivo é criar um projeto que seja simultaneamente:

1. divertido de jogar;
2. visualmente profissional;
3. tecnicamente sólido;
4. um projeto relevante de portfólio.

---

# 3. STACK OBRIGATÓRIA

Utilizar:

### Frontend / Game

* HTML5
* CSS3
* JavaScript
* Phaser 3

### Backend

* PHP
* Laravel
* API REST

### Banco

* MariaDB/MySQL

Não adicionar frameworks ou bibliotecas desnecessárias apenas por preferência pessoal.

Qualquer nova dependência deve ter uma justificativa técnica clara.

---

# 4. PRINCÍPIO FUNDAMENTAL DA ARQUITETURA

Separar claramente as responsabilidades.

## Phaser

Responsável pelo gameplay:

* personagem;
* movimentação;
* física;
* colisões;
* obstáculos;
* moedas;
* power-ups;
* geração procedural;
* animações;
* partículas;
* áudio;
* pontuação;
* velocidade;
* cenas;
* game over.

## HTML/CSS/JavaScript

Responsável pela interface da aplicação:

* login;
* cadastro;
* menu;
* perfil;
* loja;
* inventário;
* configurações;
* ranking;
* missões;
* conquistas;
* HUD complementar;
* modais.

## Laravel

Responsável por:

* autenticação;
* autorização;
* usuários;
* API;
* moedas;
* inventário;
* skins;
* compras;
* XP;
* níveis;
* missões;
* conquistas;
* recordes;
* ranking;
* validação;
* regras de negócio;
* proteção contra abuso;
* persistência.

## MariaDB

Responsável pelos dados persistentes.

---

# 5. IMPORTANTE: ANALISAR OS ARQUIVOS FORNECIDOS

Os arquivos do projeto poderão conter **imagens das skins dos personagens**.

Antes de implementar o sistema visual das skins:

1. examine todos os assets fornecidos;
2. identifique formato, dimensões e transparência;
3. identifique quais arquivos representam cada skin;
4. não substitua os assets fornecidos por imagens genéricas;
5. não gere imagens falsas para preencher espaços;
6. utilize os arquivos reais disponibilizados;
7. organize os assets de forma coerente;
8. preserve qualidade e proporção;
9. verifique se os assets precisam de spritesheets, atlas ou redimensionamento;
10. adapte o carregamento do Phaser à estrutura real dos arquivos.

Caso exista ambiguidade sobre qual imagem pertence a determinada skin, não invente. Analise o contexto dos arquivos e documente a decisão.

---

# 6. GAMEPLAY

Implementar um endless runner fluido.

O personagem:

* corre automaticamente;
* pode pular;
* pode abaixar/deslizar quando aplicável;
* possui animações;
* possui colisões;
* possui aceleração/dificuldade progressiva.

Controles desktop:

* SPACE ou ↑ = pular;
* ↓ = abaixar;
* ESC = pausar.

Controles mobile:

* toque = pular;
* gesto apropriado = abaixar/deslizar.

Os controles devem ser responsivos e possuir feedback visual.

---

# 7. SISTEMA DE DISTÂNCIA E PONTUAÇÃO

A distância deve aumentar conforme o jogador permanece vivo.

A dificuldade deve aumentar progressivamente.

Considerar:

* velocidade inicial;
* velocidade máxima;
* curva de aceleração;
* frequência dos obstáculos;
* dificuldade dos padrões;
* equilíbrio entre desafio e jogabilidade.

Evitar geração impossível de obstáculos.

Nunca gerar uma sequência que torne a sobrevivência matematicamente impossível.

A geração procedural deve possuir regras de segurança para garantir jogabilidade.

---

# 8. MOEDAS

Durante as partidas poderão aparecer moedas.

As moedas coletadas devem ser contabilizadas no gameplay.

Entretanto:

**O cliente nunca deve ser considerado uma fonte confiável para determinar definitivamente a quantidade de moedas do jogador.**

A economia deve ser controlada pelo servidor.

Implementar uma arquitetura que permita ao backend:

* validar recompensas;
* evitar duplicação;
* evitar requisições repetidas;
* registrar transações;
* impedir saldo negativo;
* impedir compras acima do saldo;
* manter consistência transacional.

Sempre que possível, utilizar transações de banco de dados para operações financeiras internas.

Criar histórico de transações de moeda quando tecnicamente apropriado.

---

# 9. LOJA

Criar uma loja de skins visualmente atraente.

Cada skin poderá possuir:

* ID;
* nome;
* descrição;
* preço;
* raridade;
* asset;
* status de disponibilidade.

A loja deve mostrar:

* skin;
* nome;
* preço;
* raridade;
* estado atual.

Estados possíveis:

* disponível;
* comprada;
* equipada;
* bloqueada.

A compra deve acontecer através da API.

O backend deve verificar:

1. usuário autenticado;
2. skin válida;
3. skin disponível;
4. jogador ainda não possui a skin;
5. saldo suficiente;
6. transação válida.

Nunca confiar em preço enviado pelo frontend.

O preço oficial deve ser obtido do banco/backend.

---

# 10. INVENTÁRIO

Criar uma área de inventário mostrando todas as skins pertencentes ao jogador.

Permitir:

* equipar;
* desequipar quando aplicável;
* visualizar;
* identificar skin atualmente equipada.

O frontend não deve simplesmente aceitar que o jogador possui uma skin.

O backend deve determinar o inventário real.

---

# 11. SISTEMA DE XP E NÍVEL

Implementar progressão.

O jogador recebe XP através de atividades válidas, como:

* distância;
* missões;
* conquistas;
* outras recompensas planejadas.

Criar uma curva de progressão equilibrada.

Evitar números arbitrários espalhados pelo código.

Valores relacionados à economia e progressão devem estar centralizados ou configuráveis.

---

# 12. MISSÕES

Implementar missões, inicialmente podendo ser:

### Diárias

Exemplos:

* percorrer determinada distância;
* coletar determinada quantidade de moedas;
* realizar determinado número de pulos;
* completar uma partida.

### Conquistas

Exemplos:

* alcançar determinada distância;
* coletar determinada quantidade de moedas;
* atingir determinados níveis;
* obter determinados recordes.

O sistema deve ser extensível para permitir novos tipos de missão futuramente.

---

# 13. RANKING

Criar ranking de jogadores.

Possibilidades:

* maior distância;
* maior pontuação;
* ranking semanal;
* ranking mensal;
* ranking geral.

Não implementar tudo obrigatoriamente na primeira versão se isso comprometer a qualidade.

Projetar a arquitetura para permitir expansão futura.

Nunca confiar cegamente na pontuação enviada pelo navegador.

Considerar mecanismos para detectar resultados suspeitos ou impossíveis.

---

# 14. AUTENTICAÇÃO

Implementar autenticação segura utilizando os recursos adequados do Laravel.

Possibilidades:

* cadastro;
* login;
* logout;
* sessão;
* recuperação de acesso, se implementada;
* proteção de endpoints.

Senhas devem ser armazenadas usando hashing seguro.

Nunca armazenar senhas em texto puro.

Nunca colocar segredos no JavaScript do frontend.

Nunca expor credenciais de banco.

---

# 15. SEGURANÇA

Segurança deve ser tratada como requisito de primeira classe.

Considerar e implementar proteção contra:

* SQL Injection;
* XSS;
* CSRF;
* mass assignment;
* manipulação de parâmetros;
* abuso de endpoints;
* spam;
* brute force;
* compras duplicadas;
* replay de requisições;
* alteração de saldo;
* alteração de inventário;
* alteração de XP;
* falsificação de pontuação;
* chamadas excessivas à API;
* acesso não autorizado;
* enumeração de recursos;
* exposição de informações sensíveis.

Implementar:

* validação server-side;
* autorização;
* rate limiting;
* sanitização quando apropriada;
* políticas/middleware adequados;
* respostas de erro seguras;
* logs sem expor informações sensíveis;
* configuração segura de produção.

Não depender exclusivamente de validação JavaScript.

---

# 16. ANTI-CHEAT

O navegador deve ser tratado como ambiente não confiável.

O jogador pode modificar:

* JavaScript;
* requests;
* localStorage;
* memória;
* parâmetros enviados;
* pontuação;
* quantidade de moedas.

A arquitetura deve minimizar o impacto disso.

Não é necessário criar um anti-cheat impossível de quebrar.

O objetivo é implementar proteções realistas para um jogo web.

Considerar:

* validação de duração da partida;
* limites plausíveis de pontuação;
* limites de moedas;
* consistência entre distância e duração;
* identificação de resultados impossíveis;
* rate limiting;
* idempotência;
* logs;
* marcação de resultados suspeitos.

Não bloquear jogadores legítimos por heurísticas frágeis.

---

# 17. BANCO DE DADOS

Projetar o banco antes de sair criando tabelas aleatoriamente.

Considerar entidades como:

* users;
* skins;
* user_skins;
* currency_transactions;
* game_sessions;
* game_results;
* missions;
* user_missions;
* achievements;
* user_achievements.

A estrutura final deve ser determinada após análise dos requisitos.

Utilizar:

* migrations;
* foreign keys;
* índices apropriados;
* constraints;
* timestamps;
* relacionamentos coerentes.

Evitar duplicação desnecessária.

---

# 18. PERFORMANCE

O jogo precisa permanecer fluido.

Priorizar:

* uso eficiente do Phaser;
* evitar criação excessiva de objetos;
* object pooling quando fizer sentido;
* carregamento eficiente de assets;
* compressão apropriada;
* evitar requisições HTTP durante o gameplay sem necessidade;
* minimizar operações no banco;
* paginação no ranking;
* cache onde fizer sentido;
* evitar consultas N+1.

O loop do jogo não deve depender da API.

O gameplay precisa continuar funcionando mesmo que uma requisição secundária falhe.

---

# 19. EXPERIÊNCIA VISUAL

O design deve fugir completamente do padrão genérico de projetos gerados por IA.

Não utilizar:

* gradientes roxos genéricos;
* excesso de glow;
* excesso de glassmorphism;
* sombras exageradas;
* componentes visualmente idênticos a dashboards SaaS;
* interfaces visualmente poluídas.

A estética deve combinar com:

* arcade;
* pixel art;
* jogos retrô;
* tecnologia moderna;
* simplicidade visual;
* boa hierarquia de informação.

A interface deve parecer um **jogo**, não um painel administrativo.

Utilizar os assets reais fornecidos.

Criar uma identidade visual consistente.

---

# 20. RESPONSIVIDADE

O jogo deve funcionar em:

* desktop;
* notebook;
* tablet;
* smartphone.

Adaptar:

* Canvas;
* HUD;
* menus;
* botões;
* loja;
* inventário;
* ranking;
* login.

No celular, os elementos interativos devem possuir tamanho adequado para toque.

Não criar uma versão mobile simplesmente reduzindo a versão desktop.

---

# 21. ACESSIBILIDADE

Considerar:

* contraste;
* foco visível;
* navegação por teclado;
* textos legíveis;
* tamanho adequado dos elementos;
* feedback visual;
* feedback sonoro opcional;
* possibilidade de silenciar sons;
* não depender exclusivamente de cores para comunicar estados.

---

# 22. ÁUDIO

Se houver assets de áudio, estruturar o sistema para:

* música;
* efeitos;
* volume separado;
* mute;
* persistência da configuração.

Não reproduzir áudio automaticamente de maneira problemática em navegadores que bloqueiam autoplay.

---

# 23. ARQUITETURA DO CÓDIGO

Não colocar toda a lógica em um único arquivo.

Organizar responsabilidades.

Exemplo conceitual:

```text
frontend/
    game/
        scenes/
        entities/
        systems/
        managers/
        config/
        utils/

    ui/
        shop/
        inventory/
        profile/
        leaderboard/

    api/
    assets/

backend/
    Laravel
        Controllers
        Models
        Services
        Requests
        Policies
        Resources
        Jobs
        Events
        Middleware
```

A estrutura final deve respeitar as convenções reais do Laravel e do Phaser.

Não criar abstrações apenas para parecer sofisticado.

---

# 24. API

A API deve possuir endpoints claros e consistentes.

Exemplos conceituais:

```text
POST /api/auth/login
POST /api/auth/register
POST /api/game/start
POST /api/game/finish
GET  /api/profile
GET  /api/skins
GET  /api/inventory
POST /api/inventory/equip
POST /api/shop/purchase
GET  /api/missions
GET  /api/achievements
GET  /api/leaderboard
```

Os endpoints finais devem ser definidos de acordo com a arquitetura implementada.

Utilizar códigos HTTP apropriados.

Respostas devem possuir estrutura consistente.

Não retornar stack traces ou informações internas em produção.

---

# 25. TRATAMENTO DE ERROS

Todo sistema externo deve considerar falhas.

Exemplos:

* API indisponível;
* timeout;
* banco indisponível;
* sessão expirada;
* compra rejeitada;
* saldo insuficiente;
* skin inexistente;
* resultado inválido.

A interface deve mostrar mensagens úteis ao usuário.

Evitar:

```text
500 Internal Server Error
```

como única mensagem apresentada ao jogador.

Ao mesmo tempo, não esconder erros de desenvolvimento.

Utilizar logs adequados no backend.

---

# 26. TESTES

Criar testes para as partes críticas.

Prioridade:

### Backend

* autenticação;
* autorização;
* compra de skins;
* saldo;
* transações;
* inventário;
* missões;
* regras de recompensa;
* validação de resultados.

### Frontend/Game

Testar principalmente sistemas críticos e determinísticos quando aplicável.

Não criar testes artificiais apenas para aumentar cobertura.

---

# 27. CONFIGURAÇÃO

Não colocar configurações sensíveis diretamente no código.

Utilizar:

```text
.env
```

para:

* banco;
* chaves;
* URLs;
* configurações específicas de ambiente.

Nunca commitar:

* senhas;
* tokens;
* chaves privadas;
* credenciais.

Criar `.env.example`.

---

# 28. VERSIONAMENTO E DOCUMENTAÇÃO

Criar documentação suficiente para outra pessoa conseguir:

1. clonar;
2. instalar dependências;
3. configurar ambiente;
4. criar banco;
5. executar migrations;
6. iniciar backend;
7. iniciar frontend;
8. executar o jogo;
9. executar testes.

Criar README profissional.

Documentar decisões arquiteturais importantes.

---

# 29. FLUXO DE DESENVOLVIMENTO

NÃO tente implementar o projeto inteiro em uma única etapa.

Trabalhe incrementalmente.

Primeiro:

1. analisar o ambiente;
2. analisar arquivos existentes;
3. analisar assets;
4. verificar versões das ferramentas;
5. verificar dependências;
6. definir arquitetura;
7. identificar riscos;
8. definir estrutura inicial.

Depois implementar em etapas pequenas.

Após cada etapa:

* verificar erros;
* executar testes;
* revisar código;
* verificar regressões;
* verificar segurança;
* verificar performance;
* verificar responsividade.

---

# 30. REGRA DE PRESERVAÇÃO

Antes de alterar qualquer arquivo existente:

* leia o arquivo;
* entenda sua função;
* identifique dependências;
* verifique possíveis efeitos colaterais.

Não remover funcionalidades existentes sem justificativa.

Não sobrescrever arquivos inteiros quando uma alteração localizada for suficiente.

Não modificar configurações importantes sem verificar compatibilidade.

---

# 31. PROCESSO DE DECISÃO TÉCNICA

Quando houver mais de uma solução válida:

1. apresente as opções;
2. explique os trade-offs;
3. escolha a solução mais adequada;
4. justifique tecnicamente.

Não escolher uma tecnologia apenas porque é popular.

Não adicionar dependências sem necessidade.

---

# 32. PRIMEIRA TAREFA

Antes de escrever código:

### FAÇA UMA AUDITORIA INICIAL DO PROJETO.

Analise:

* estrutura de diretórios;
* arquivos existentes;
* imagens;
* sprites;
* assets;
* configurações;
* versões;
* dependências;
* ambiente;
* arquitetura existente.

Depois produza:

## Diagnóstico

O que já existe.

## Arquitetura proposta

Como frontend, Phaser, Laravel e MariaDB irão se comunicar.

## Modelo de dados inicial

Entidades e relacionamentos.

## Estrutura de diretórios proposta

Organização do projeto.

## Plano de implementação

Etapas ordenadas.

## Riscos técnicos

Problemas que podem surgir.

## Segurança

Principais ameaças e respectivas medidas.

## Performance

Principais pontos de atenção.

## Dúvidas bloqueantes

Pergunte SOMENTE aquilo que realmente impedir a implementação.

Se alguma decisão puder ser tomada de forma razoável, tome a decisão e explique-a em vez de interromper o desenvolvimento com perguntas desnecessárias.

### IMPORTANTE

Nesta primeira etapa, **não implemente funcionalidades ainda**.

Primeiro faça a análise completa e apresente o plano técnico.

Depois de minha aprovação, começaremos a implementação incremental.