<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Config;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class ConfigController extends Controller
{
    public function store(Request $request)
    {
        
        // Validar los datos
        $rules = [
            'token_api' => 'required|string|max:255',
            'numero_verificacion' => 'required|numeric|max:255'
        ];
        
        $validator = Validator::make($request->all(), $rules);

        // Comprobar si la validación falla
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }
        // Crear el usuario
        $config = Config::create([
            'token_api' => bcrypt($request->token_api),
            'numero_verificacion' => $request->numero_verificacion,
            'fecha' => Carbon::now(), 
            'usuario' => 'admin',
            'estado' => 1
        ]);
       

        return response()->json(['message' => 'Configuración creada', 'config' => $config], 201);
    }
    public function getClientData()
    {
        // Consumir el API externo
        $response = Http::get('https://example.com/api/clients'); // Cambia esta URL por la de tu API
        
        if ($response->successful()) {
            return response()->json($response->json(), 200);
        }

        return response()->json(['error' => 'Failed to fetch data'], 500);
    }
}
