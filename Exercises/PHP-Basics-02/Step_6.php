<?php

    function sumOfDigitsOfNumber($number){
        $sum = 0;
        for($i=0;$i<strlen($number);$i++){
            $sum += $number%10;
            $number = $number/10;
        }
        return $sum;
    }

    echo sumOfDigitsOfNumber("135");

?>