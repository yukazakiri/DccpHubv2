<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/* CREATE  TABLE `laravel-v1`.student_contacts (
    id                   INT    NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    emergency_contact_name VARCHAR(100)       ,
    emergency_contact_phone INT       ,
    emergency_contact_address VARCHAR(100)       ,
    facebook_contact     VARCHAR(255)       ,
    personal_contact     BIGINT
 );

 */
final class StudentContact extends Model
{
    use HasFactory;

    protected $table = 'student_contacts';

    protected $fillable = [
        'emergency_contact_name',
        'emergency_contact_phone',
        'emergency_contact_address',
        'facebook_contact',
        'personal_contact',
    ];

    public function student()
    {
        return $this->belongsTo(Students::class);
    }
}
