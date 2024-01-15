<?php
class HitChecker {
    public function check($x_num, $y_num, $r_num): bool{
        $second_quarter_hit = false;
        $third_quarter_hit = false;
        $fourth_quarter_hit = false;

        if ($x_num >= 0 && $x_num <= $r_num && $y_num <= 0 && $y_num >= $r_num / 2) {
            $second_quarter_hit = true;
        }

        if ($x_num >= 0 && $y_num >= 0 && $y_num <= $x_num / 2 - $r_num) {
            $third_quarter_hit = true;
        }

        if ($x_num <= 0 && $y_num >= 0 && $x_num * $x_num + $y_num * $y_num <= ($r_num) * ($r_num)) {
            $fourth_quarter_hit = true;
        }

        return $second_quarter_hit || $third_quarter_hit || $fourth_quarter_hit;
    }
}