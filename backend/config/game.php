<?php

return [
    /*
    |------------------------------------------------------------------
    | Valores de balanceamento centralizados
    |------------------------------------------------------------------
    |
    | Todos os valores de gameplay, economia e progressão estão aqui.
    | Nenhum número mágico deve aparecer no código.
    |
    */

    'gameplay' => [
        'initial_speed' => 200,
        'max_speed' => 450,
        'acceleration_rate' => 0.5,     // pixels/segundo por segundo
        'obstacle_spawn_interval' => 2000, // ms
        'min_obstacle_gap' => 120,      // px entre obstáculos
        'max_obstacle_gap' => 400,
    ],

    'coins' => [
        'base_reward_per_distance' => 1, // 1 moeda a cada X metros
        'max_coins_per_run' => 1000,
        'coins_per_meter' => 1,
    ],

    'anti_cheat' => [
        'min_duration_seconds' => 5,
        'max_duration_seconds' => 3600,
        'max_distance_per_second' => 30, // velocidade máxima física
        'max_coins_per_meter' => 5,
        'max_score_per_second' => 100,
    ],

    'xp' => [
        'base_xp_per_level' => 100,
        'multiplier' => 1.5,
        'xp_per_meter' => 0.1,
        'xp_per_coin' => 0.5,
    ],

    'skins' => [
        'default_price' => 100,
    ],
];