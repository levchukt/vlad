document.getElementById('buyButton').addEventListener('click', function() {
    const orderFormContainer = document.getElementById('orderFormContainer');
    orderFormContainer.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    const orderFormContainer = document.getElementById('orderFormContainer');
    orderFormContainer.style.display = 'none';
});
