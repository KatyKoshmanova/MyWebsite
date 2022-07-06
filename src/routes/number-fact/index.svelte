<script lang="ts" context="module">
    export const prerender = false;
</script>

<script lang="ts">
    let fact: string;

    function fetchSomeFact() {
        return fetch('http://numbersapi.com/random/math')
            .then(r => r.text());
    }

    async function handleClick() {
        fact = 'Loading...';
        fact = await fetchSomeFact();
    }

</script>

<div class="wrapper" id="api">
    <div class="api">
        <h2>Random Fact About Numbers</h2>
        <p>{fact || ""}</p>
        <div class="button_wrapper">
            <button on:click={handleClick}>Get Fact!</button>
        </div>
    </div>
</div>

<style>
    h2 {
        margin-top: 0;
        text-align: center;
    }

    p {
        text-align: center;
    }

    .button_wrapper {
        display: flex;
        justify-content: center;
        margin-top: 3vh;
    }

    button {
        text-decoration: none;
        display: inline-block;
        width: 140px;
        height: 35px;
        line-height: 30px;
        border-radius: 45px;
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #524f4e;
        background: antiquewhite;
        box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
        transition: .3s;
    }

    button:hover {
        background: #2EE59D;
        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
        color: white;
        transform: translateY(-7px);
    }
</style>