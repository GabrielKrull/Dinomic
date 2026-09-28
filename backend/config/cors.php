<?php

return [
    /*
    |------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |------------------------------------------------------------------
    |
    | Configurações para permitir requisições cross-origin do
    | frontend (Phaser/HTML) para a API Laravel.
    |
    */

    'paths' => [
        'api/*',
        'sanctum/*',
        'vite/*',
    ],

    'allowed_origins' => [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:8000',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => [
        '*',
    ],

    'exposed_headers' => [],

    'supports_credentials' => true,

    'max_age' => 3600,
];