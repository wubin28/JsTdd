export function addProduct() {

    const d = document.getElementById('description').value;
    const tdDescription = document.createElement('td');
    tdDescription.innerHTML = d;
  
    const p = document.getElementById('price').value;
    const tdPrice = document.createElement('td');
    tdPrice.innerHTML = p;

    const tr = document.createElement('tr');
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);

    const table = document.getElementById('products');
    table.appendChild(tr);
}