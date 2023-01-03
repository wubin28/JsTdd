export function addProduct() {

    // Create <td class="description">some description</td>
    const tdDescription = document.createElement('td');
    tdDescription.classList.add('description');
    const inputDescription = document.getElementById('description');
    tdDescription.innerHTML = inputDescription.value;
  
    // Create <td class="price">some price</td>
    const tdPrice = document.createElement('td');
    tdPrice.classList.add('price');
    const inputPrice = document.getElementById('price');
    tdPrice.innerHTML = inputPrice.value;

    // Add the two <td> elements to a new <tr>.
    const tr = document.createElement('tr');
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);

    // Add the <tr> to the "products" table.
    const table = document.getElementById('products');
    table.appendChild(tr);

    // Clear the 2 text boxes, and give focus to the description text box.
    inputDescription.value = '';
    inputPrice.value = '';
    inputDescription.focus(); 
}