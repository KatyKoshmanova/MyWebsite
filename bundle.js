const t=document.getElementById("get_fact_btn"),e=document.getElementById("api_text");t.addEventListener("click",(async function(t){e.textContent="Loading...",e.textContent=await fetch("http://numbersapi.com/random/math").then((t=>t.text()))}));
