<?php
include 'checker.php';

date_default_timezone_set('UTC');

$start = microtime(true);

$response = [];

session_start();


if (isset($_GET['clear'])) {
    $_SESSION['table'] = '';
    echo "Table cleaned Successfully.";
    exit();
}

if (isset($_GET['update'])) {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    $response = $_SESSION['table'];

    exit($response);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    http_response_code(405);
    exit("Method not allowed.");
}

if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r']) && isset($_GET['utc'])) {
    $x = $_GET['x'];
    $y = $_GET['y'];
    $r = $_GET['r'];
    $utc = $_GET['utc'];

    // Валидация параметров
    $validXValues = range(-5, 3); // Разрешенные значения для X
    $validYValues = range(-4, 4); // Разрешенные значения для Y
    $validRValues = [1, 1.5, 2, 2.5, 3]; // Разрешенные значения для R

    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || !is_numeric($utc)||
        !in_array((int)$x, $validXValues) || !in_array((int)$y, $validYValues) || !in_array($r, $validRValues)) {
        http_response_code(400);
        exit("Invalid parameters passed.");
    } else {
        $current_time = date("H:i:s", time() + (new DateTimeZone('Europe/Moscow'))->getOffset(new DateTime()));
        $hit_checker = new HitChecker();
        $checked_hit = $hit_checker->check($x, $y, $r) ? "TRUE" : "FALSE";

        $compution_time = number_format((microtime(true) - $start) * 1000000, 2, ".", "");

        $row = "
            <tr>
                <th><time>$current_time</time></th>
                <th><time>$compution_time мc</time></th>
                <th>$x</th>
                <th>$y</th>
                <th>$r</th>
                <th>$checked_hit</th>
            </tr>";
        if(!isset($_SESSION['table'])) {
            $_SESSION['table'] = '';
        }

        $response =  $_SESSION['table'].$row;

        $_SESSION['table'] = $response;
    }
} else {
    http_response_code(400);
    exit("Some parameters are missing: x, y, r, utc expected.");
}
echo $response;