// Procurar o botao
let buttonAddFiel = document.querySelector('#add-time-button')
let button
buttonAddFiel.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma ação
function cloneField() {
    // Duplicar  os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    const gridContainerDesktop = newFieldsContainer.firstElementChild

    // Adiciona a classe 'clone' para posicionar o botão.
    gridContainerDesktop.setAttribute('class', gridContainerDesktop.getAttribute('class') + ' clone')

    // Cria o botão
    const trash = '<button class="trash-button" type="button">X</button>'

    // Adiciona o botão
    gridContainerDesktop.innerHTML += trash
    
    // limpar os campos.
    const fields = newFieldsContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        field.value = '00:00'
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)

    // Adiciona evento "removeFild" no botão
    button = gridContainerDesktop.querySelector('.trash-button')
    button.addEventListener('click', removeFild)
}