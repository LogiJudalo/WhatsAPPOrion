<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'clientes_whatsapp';
    public $timestamps = false;
    protected $fillable = [
        'id_cliente_whatsapp',
        'nit',
        'nombre'
    ];

    public function mensajes(): HasMany
    {
        return $this->hasMany(Mensaje::class);
    }

}
