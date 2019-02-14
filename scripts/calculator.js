const $ = window.jQuery;


$('.button:not(.special)').on('click', function(e) {
    let val = e.target.value,
        txt = document.form.textview.value;
    if (!(val === txt[txt.length - 1] && (val === '+' || val === '-' || val === '*' || val === '/' || val === '.'))) {
        for (let i = 0; i < txt.length; i++) {
            if (txt[i] === '.' && val === '.') {
                return;
            }
        }
        document.form.textview.value += e.target.value;
    }
});

$('#equal').on('click', function() {
    const num = document.form.textview.value;
    if(num) {
        document.form.textview.value = Math.round(eval(num)*1000000000)/1000000000;
    }
});

$('#C').on('click', function() {
    document.form.textview.value = '';
});

$('#back').on('click', function() {
    const el = document.form.textview.value;
    document.form.textview.value = el.substring(0,el.length-1);
});