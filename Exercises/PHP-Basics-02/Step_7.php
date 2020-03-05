<?php

    function replacePHP_Python($string){
        $new_string = str_replace(["Python","PHP"],["'","Python"],$string);
        $new_string2 = str_replace("'","PHP",$new_string);
        return $new_string2;
    }

    echo replacePHP_Python("Python PHP");
?>