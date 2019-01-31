let $ = window.jQuery;

$('.button:not(.special)').on('click', function(e) {
    document.form.textview.value += e.target.value;
});

$('#equal').on('click', function() {
    let num = document.form.textview.value;
    if(num) {
        document.form.textview.value = Math.round(eval(num)*1000000000)/1000000000;
    }
});

$('#C').on('click', function() {
    document.form.textview.value = '';
});

$('#back').on('click', function() {
    let el = document.form.textview.value;
    document.form.textview.value = el.substring(0,el.length-1);
});