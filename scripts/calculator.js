let $ = window.jQuery;

$('.button:not(.special)').on('click', function(e) {
    document.form.textview.value += e.target.value;
});

$('#equal').on('click', function(e) {
    let num = document.form.textview.value;
    if(num) {
        document.form.textview.value = eval(num);
    }
});

$('#C').on('click', function(e) {
    document.form.textview.value = '';
});

$('#back').on('click', function(e) {
    let el = document.form.textview.value;
    document.form.textview.value = el.substring(0,el.length-1);
});