let nama = document.getElementById("nama");
let instansi = document.getElementById("instansi");
let simpan = document.getElementById("simpan");
let list = document.getElementById("list");
let data = [];
let table = document.getElementById("table");

simpan.addEventListener("click", function () {
  console.log("p");
  data.push({ nama: nama.value, instansi: instansi.value });
  console.log(data);
  list.innerHTML += " ";

  for (const [index, value] of data.entries()) {
    // list.innerHTML += `<li> Nama = ${value.nama}, Instansi ${value.instansi} </li>`;
    table.innerHTML += `<tr>
        <td>${value.nama}</td>
        <td>${value.instansi}</td>
    </tr>`;
  }
});
