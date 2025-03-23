<?php
header('Content-Type: application/json');

$crosswordData = [
  'grid' => [
    [' ', 'H', ' ', ' '],
    ['C', 'O', 'D', 'E'],
    [' ', 'S', ' ', ' '],
    [' ', 'T', ' ', ' ']
  ],
  'questions' => [
    'across' => [
      '1. Программирование (4 буквы)',
      '2. Сигнал (3 буквы)'
    ],
    'down' => [
      '1. Выбор (4 буквы)',
      '3. Текст (4 буквы)'
    ]
  ]
];

echo json_encode($crosswordData);
?>