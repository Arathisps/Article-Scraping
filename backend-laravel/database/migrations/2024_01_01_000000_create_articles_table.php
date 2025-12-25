<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('articles', function (Blueprint \) {
            \->id();
            \->string('title');
            \->longText('content')->nullable();
            \->string('source_url')->nullable();
            \->boolean('is_generated')->default(false);
            \->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('articles');
    }
};
