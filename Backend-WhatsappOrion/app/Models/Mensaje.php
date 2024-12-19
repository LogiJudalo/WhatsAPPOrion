<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Mensaje extends Model
{
    use HasFactory;

    protected $table = 'mensajes_whatsapp';
    public $timestamps = false;
    protected $fillable = [
        'id_mensaje_whatsapp',
        'titulo',
        'descripcion',
        'check_url',
        'url_texto_estado',
        'estado_flujo_activacion',
        'id_cliente_whatsapp'
    ];
}
