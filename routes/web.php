<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log; // Added Log facade import
use Inertia\Inertia;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\TuitionController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SubjectsController;
use App\Http\Controllers\ChangelogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\User\OauthController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\User\LoginLinkController;
use App\Http\Controllers\PendingEnrollmentController;
use App\Http\Controllers\EnrollmentAuthController; // Added
use App\Http\Controllers\GuestDashboardController;
use App\Http\Controllers\Student\EnrollmentController;

Route::get('/', [WelcomeController::class, 'home'])->name('home');

// Test Notifications
Route::get('/test-toast-success', function() {
    return redirect()->route('dashboard')->with('success', 'Success notification test');
})->middleware(['auth:sanctum', config('jetstream.auth_session')])->name('test.toast.success');

Route::get('/test-toast-error', function() {
    return redirect()->route('dashboard')->with('error', 'Error notification test');
})->middleware(['auth:sanctum', config('jetstream.auth_session')])->name('test.toast.error');

Route::get('/test-toast-message', function() {
    return redirect()->route('dashboard')->with('message', 'Info notification test');
})->middleware(['auth:sanctum', config('jetstream.auth_session')])->name('test.toast.message');

// Online Enrollment Route
Route::get('/enroll', [PendingEnrollmentController::class, 'create'])->name('enroll'); // Use controller create method
Route::post('/pending-enrollment', [PendingEnrollmentController::class, 'store'])->name('pending-enrollment.store');
Route::post('/enroll/confirm', [PendingEnrollmentController::class, 'confirm'])->name('enroll.confirm');

// Enrollment Google Auth Routes
Route::prefix('enrollment/auth')->group(function () {
    Route::get('/google/redirect', [EnrollmentAuthController::class, 'redirectToGoogle'])->name('enrollment.google.redirect');
    Route::get('/callback/google', [EnrollmentAuthController::class, 'handleGoogleCallback'])->name('enrollment.google.callback'); // Restored original
    Route::get('/google/logout', [EnrollmentAuthController::class, 'logout'])->name('enrollment.google.logout'); // Added logout route
});

// PWA Offline Route
Route::get('/offline', function () {
    return view('vendor.laravelpwa.offline');
})->name('offline');

Route::prefix('auth')->group(
    function () {
        // OAuth
        Route::get('/redirect/{provider}', [OauthController::class, 'redirect'])->name('oauth.redirect');
        Route::get('/callback/{provider}', [OauthController::class, 'callback'])->name('oauth.callback');
        // Magic Link
        Route::middleware('throttle:login-link')->group(function () {
            Route::post('/login-link', [LoginLinkController::class, 'store'])->name('login-link.store');
            Route::get('/login-link/{token}', [LoginLinkController::class, 'login'])
                ->name('login-link.login')
                ->middleware('signed');
        });
    }
);

Route::middleware(['auth:sanctum', config('jetstream.auth_session')])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/enrolee', GuestDashboardController::class)->name('enrolee.dashboard');
    Route::delete('/auth/destroy/{provider}', [OauthController::class, 'destroy'])->name('oauth.destroy');

    Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');

    Route::resource('/subscriptions', SubscriptionController::class)
        ->names('subscriptions')
        ->only(['index', 'create', 'store', 'show']);

    // Student Enrollment Routes
    Route::prefix('student')->group(function () {
        Route::get('/enroll/subjects', [EnrollmentController::class, 'showEnrollmentForm'])->name('student.enroll.subjects');
        Route::post('/enroll/subjects', [EnrollmentController::class, 'processEnrollment'])->name('student.enroll.subjects.submit');
    });

    Route::get('/schedule', [ScheduleController::class, 'index'])->name('schedule.index');
    Route::get('/tuition', [TuitionController::class, 'index'])->name('tuition.index');
    Route::get('/subjects', [SubjectsController::class, 'index'])->name('subjects.index');
    Route::get('/changelog', [ChangelogController::class, 'index'])->name('changelog.index');
});

Route::get('/payment-process', function () {
    return Inertia::render('PaymentProcess');
})->name('payment.process');


