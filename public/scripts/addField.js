// Procurar o botao
let buttonAddFiel = document.querySelector('#add-time-button')
buttonAddFiel.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma ação
function cloneField() {
    // Duplicar  os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    const trash = '<button class="trash-button" type="button">X</button>'


    newFieldsContainer.firstElementChild.innerHTML += trash
    

    console.log(newFieldsContainer)
    // limpar os campos.
    const fields = newFieldsContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field) {
        field.value = '00:00'
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}