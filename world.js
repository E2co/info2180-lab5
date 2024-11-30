document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lookup').addEventListener('click', function() {
        const countryInput = document.getElementById('country').value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `world.php?country=${encodeURIComponent(countryInput)}`, true);
        xhr.onload = function(){
            const resultdiv = document.getElementById('result');
            resultdiv.innerHTML = '';
            if(xhr.status >= 200 && xhr.status < 300){
                resultdiv.innerHTML = xhr.responseText;
            } else{
                    resultdiv.textContent = 'No country found.';
            }
            };
            xhr.send();
    });

    document.getElementById('citylook').addEventListener('click', function() {
        const countryInput = document.getElementById('country').value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `world.php?country=${encodeURIComponent(countryInput)}&lookup=cities`, true);
        xhr.onload = function(){
            const resultdiv = document.getElementById('result');
            resultdiv.innerHTML = '';
            if(xhr.status >= 200 && xhr.status < 300){
                resultdiv.innerHTML = xhr.responseText;
            } else{
                    resultdiv.textContent = 'No cities found.';
            }
            };
            xhr.send();
    });
});