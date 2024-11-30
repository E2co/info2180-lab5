document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lookup').addEventListener('click', function() {
        const countryInput = document.getElementById('country').value;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `world.php?country=${encodeURIComponent(countryInput)}`, true);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                const results = JSON.parse(xhr.responseText);
                const resultdiv = document.getElementById('result');

                resultdiv.innerHTML = '';

                if(results.length > 0){
                    results.forEach(country => {
                        const countrydiv = document.createElement('div');
                        countrydiv.textContent = `Country: ${country.name}, Population: ${country.population}`;
                        resultdiv.appendChild(countrydiv);
                    });
                } else{
                    resultdiv.textContent = 'No country found.';
                }
            } else{
                console.error('Error fetching data:', xhr.statusText);
            }
        };

        xhr.send();
    });
});