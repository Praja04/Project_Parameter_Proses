<?php

namespace App\Models;

use CodeIgniter\Model;

class insert extends Model
{
    protected $table            = 'line5_data_alt2_test';
   
    protected $allowedFields    = [
        'L5_ALT2_ACTUAL_PRESSURE_CELL2',
        'L5_ALT2_RESULT_CELL2',
        'L5_ALT2_ACTUAL_PRESSURE_CELL4',
        'L5_ALT2_RESULT_CELL4',
        'L5_ALT2_ACTUAL_PRESSURE_CELL6',
        'L5_ALT2_RESULT_CELL6',
        'L5_ALT2_FILL_FAILURE_TIME',
        'L5_ALT2_FILL_PRESSURE',
        'L5_ALT2_TEST_PRESSURE',
        'L5_ALT2_LEAK_PRESSURE_TOLERANCE',
        'L5_ALT2_TEST_PRESSURE_TOLERANCE',
        'L5_ALT2_FILL_PRESSURE_TOLERANCE',
        'L5_ALT2_STABILIZATION_TIME',
        'L5_ALT2_TEST_TIME',
       // 'waktu',
        'status'
    ];
}
