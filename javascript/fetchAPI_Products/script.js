
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.total)
        console.log(data.limit)
        console.log(data.product)

        for (const [i, d] of data.products.entries()) {
            document.getElementById("list").innerHTML += `<div class="col-lg-6">
            <div class="row">

                <div class="col-lg-6 p-2 "> 

                <img src='${d.thumbnail}' class="rounded d-block w-100" />
                </div>
                <div class ="col-lg-6 p-2">
            <li>${d.title}</li>
                    <li>${d.description}</li>
                <li>${d.price}</li>
                    <li>${d.stock}</li>
                    </div>
                     </div >
                      </div>`
        }
    })