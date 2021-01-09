document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    var inputname = document.getElementById('name');
    checkPageButton.addEventListener('click', function() {
        alert("hello ! " + inputname.value)
    }, false);
}, false);