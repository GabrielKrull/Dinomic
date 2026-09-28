# 🦕 Dinomic — Endless Runner

Jogo endless runner para navegador com economia, skins, inventário, XP, missões, conquistas e ranking. Inspirado no jogo do dinossauro do Chrome, com identidade própria.

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend / Game | HTML5, CSS3, JavaScript, Phaser 3 |
| Backend API | PHP, Laravel, REST API |
| Banco de dados | MariaDB / MySQL |
| Autenticação | Laravel Sanctum |

## Requisitos

- Node.js 18+ (para frontend)
- PHP 8.2+ e Composer (para backend)
- MariaDB ou MySQL
- Navegador moderno

## Setup Local

### Backend

```bash
cd backend
cp .env.example .env
# Edite .env com suas credenciais de banco
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura

```
Dinomic/
├── frontend/          # Código do jogo e interface
├── backend/           # Projeto Laravel (API)
├── planning_report.md # Plano técnico completo
└── system_instructions.md # Requisitos do produto
```

## Roadmap

Ver `planning_report.md` para os detalhes de cada fase (Fase 0–9).

## Licença

MIT — Copyright 2026 Gabriel Alves Krull