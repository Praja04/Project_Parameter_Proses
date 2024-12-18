<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\insert;

class TestInsert extends BaseController
{

    public function insert_data()
    {
        // Retrieve the raw JSON data from the request body
        $json_data = $this->request->getBody();

        // Decode the JSON data
        $data = json_decode($json_data, true); // Decode as associative array

        // Check if decoding was successful
        if (json_last_error() !== JSON_ERROR_NONE) {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST, 'Invalid JSON data');
        }

        // Create the insert model instance
        $model = new insert(); // Make sure you have a model class for database interaction

        // Map the incoming data to the database fields
        $db_data = [
            'L5_ALT2_ACTUAL_PRESSURE_CELL2' => $data['L5_ALT2_ACTUAL_PRESSURE_CELL2'],
            'L5_ALT2_RESULT_CELL2' => $data['L5_ALT2_RESULT_CELL2'],
            'L5_ALT2_ACTUAL_PRESSURE_CELL4' => $data['L5_ALT2_ACTUAL_PRESSURE_CELL4'],
            'L5_ALT2_RESULT_CELL4' => $data['L5_ALT2_RESULT_CELL4'],
            'L5_ALT2_ACTUAL_PRESSURE_CELL6' => $data['L5_ALT2_ACTUAL_PRESSURE_CELL6'],
            'L5_ALT2_RESULT_CELL6' => $data['L5_ALT2_RESULT_CELL6'],
            'L5_ALT2_FILL_FAILURE_TIME' => $data['L5_ALT2_FILL_FAILURE_TIME'],
            'L5_ALT2_FILL_PRESSURE' => $data['L5_ALT2_FILL_PRESSURE'],
            'L5_ALT2_TEST_PRESSURE' => $data['L5_ALT2_TEST_PRESSURE'],
            'L5_ALT2_LEAK_PRESSURE_TOLERANCE' => $data['L5_ALT2_LEAK_PRESSURE_TOLERANCE'],
            'L5_ALT2_TEST_PRESSURE_TOLERANCE' => $data['L5_ALT2_TEST_PRESSURE_TOLERANCE'],
            'L5_ALT2_FILL_PRESSURE_TOLERANCE' => $data['L5_ALT2_FILL_PRESSURE_TOLERANCE'],
            'L5_ALT2_STABILIZATION_TIME' => $data['L5_ALT2_STABILIZATION_TIME'],
            'L5_ALT2_TEST_TIME' => $data['L5_ALT2_TEST_TIME'],
            //'waktu' => $data['waktu'],
            'status' => 'OK',
        ];

        // Use try-catch block for handling errors during database insertion
        try {
            // Attempt to insert the data into the database
            $insertSuccess = $model->insert($db_data); // Store result of insert operation

            // Check what the insert operation returns
            if ($insertSuccess === false) {
                // Log or debug the result if insert operation fails
                // For example, use error_log to debug what is returned
                error_log("Insert failed, result: " . print_r($insertSuccess, true));

                // If the insert returns false, handle it as a failure
                return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST, 'Failed to Insert Data');  // HTTP_BAD_REQUEST (400)
            } else {
                // If insert is successful, return success message
                // Membuat array untuk respons
                $responseData = [
                    'status' => ResponseInterface::HTTP_OK,
                    'message' => 'Data Inserted Successfully'
                    
                ];

                // Mengatur status kode dan mengembalikan respons dalam format JSON
                return $this->response
                    ->setStatusCode(ResponseInterface::HTTP_OK)
                    ->setContentType('application/json') // Mengatur tipe konten ke JSON
                    ->setBody(json_encode($responseData));
            }
        } catch (\Exception $e) {
            // Catch any exceptions and return a 500 Internal Server Error with the exception message
            return $this->response->setStatusCode(ResponseInterface::HTTP_INTERNAL_SERVER_ERROR, 'Error: ' . $e->getMessage())->setContentType('application/json'); // HTTP_INTERNAL_SERVER_ERROR (500)
        }
    }

   
}
