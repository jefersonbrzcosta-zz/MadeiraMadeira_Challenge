<?php 

function odd_sum($number){
  $array = array();
  while($number >= 0) {
    if($number % 2){
      array_push($array, $number);
    }
    $number--;
  }
  return array_sum($array);
}

echo(odd_sum(3));


