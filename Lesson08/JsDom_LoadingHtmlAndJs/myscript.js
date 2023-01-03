export function calculateTotalPrice() {

    const table = document.getElementById('productsTable');
    const priceElems = table.querySelectorAll('td.price');

    let total = 0.0;
    for (let priceElem of priceElems) {
        const price = Number(priceElem.innerHTML);
        total += price;
    }
    return total;
}