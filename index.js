window.addEventListener('load', () => {
  const quantitySelector = document.getElementById('quantity-selector')

  quantitySelector.addEventListener('change', (event) => {
    console.log('you selected', event.target.value, event)
    const numberOfServings = event.target.value
    const quantityElements = document.getElementsByClassName('quantity')

    for (const quantityElement of quantityElements) {
      const quantityPerServing = quantityElement.getAttribute('data-quantity-per-serving')

      quantityElement.innerHTML = numberOfServings * quantityPerServing
    }
  })
})
