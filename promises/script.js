async function getData() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        
        let result = await response.json();
        let data = result.products;
        
        let listEl = document.querySelector("#list-1");
        
        //listEl.innerHTML = ""; 

        data.forEach(d => {
            let liEl = document.createElement('li');
            liEl.textContent = d.title;
            listEl.appendChild(liEl);
        });
        
    } catch (e) {
        console.log("Error fetching data:", e);
    }
}

getData();