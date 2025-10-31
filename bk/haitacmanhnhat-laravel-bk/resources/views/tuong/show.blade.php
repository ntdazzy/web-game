@extends('layouts.app')

@section('content')
    <section class="character-detail container py-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Trang chủ</a></li>
                <li class="breadcrumb-item"><a href="{{ route('characters.index') }}">Danh sách tướng</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ $character->name }}</li>
            </ol>
        </nav>

        <div class="row g-5 align-items-center">
            <div class="col-md-5 text-center">
                @if ($character->thumbnail)
                    <img src="{{ legacy_asset($character->thumbnail) }}" alt="{{ $character->name }}" class="img-fluid rounded shadow">
                @else
                    <img src="{{ legacy_asset('assets/imgs/avatar.png') }}" alt="{{ $character->name }}" class="img-fluid rounded shadow">
                @endif
            </div>
            <div class="col-md-7">
                <h1 class="display-5 fw-bold">{{ $character->name }}</h1>
                <p class="text-muted fs-5">{{ $character->description }}</p>
                @if (! is_null($character->power))
                    <p class="badge text-bg-primary fs-6">Chỉ số sức mạnh: {{ number_format($character->power) }}</p>
                @endif
            </div>
        </div>
    </section>
@endsection
