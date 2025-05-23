<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

final class attendances extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_enrollment_id',
        'student_id',
        'date',
        'status',

    ];

    public function class_enrollment()
    {
        return $this->belongsTo(class_enrollments::class, 'class_enrollment_id');
    }
}
