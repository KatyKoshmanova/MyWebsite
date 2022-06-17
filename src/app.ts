const getFactBtn: HTMLButtonElement = document.getElementById('get_fact_btn') as HTMLButtonElement;
const fact: HTMLTextAreaElement = document.getElementById('api_text') as HTMLTextAreaElement;

function fetchSomeFact() {
    return fetch('http://numbersapi.com/random/math')
        .then(r => r.text());
}

getFactBtn.addEventListener('click', async function (e) {
    fact.textContent = 'Loading...';
    fact.textContent = await fetchSomeFact();
});