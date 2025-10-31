<div class="history">
    @foreach (config('giftcode.code_types') as $codeType)
        <div class="table-his d-none table-responsive" id="table-his-{{ $codeType['id'] }}">
            @include($codeType['table_view'])
        </div>
    @endforeach
</div>
