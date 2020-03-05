<?php
    function isArmstrong($num){
        $number_to_compare = $num;
        $num_length = strlen((string)$num);
        $sum = 0;
        for($i=0;$i<$num_length;$i++){
            $var = $num % 10;
            $num = $num/10;
            $sum += $var ** $num_length;
        }
        if($sum === $number_to_compare){
            return true;
        }else{
            return false;
        }
    }

    echo isArmstrong(153);
?>