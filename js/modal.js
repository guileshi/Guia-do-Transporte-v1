function toggleModal(modal){
    $(`#${modal}`).toggleClass('hide')
}

$('#form__trans__buttom').click(()=> {

    $('#form__trans__buttom').removeClass('--white')
    $('#form__mudanca__buttom').addClass('--white')

    $('.form__only__trans').removeClass('hide')

    $('.form__only__trans input').prop('required', true)

    $('#transItem__quotation__obs').attr("placeholder", "Peso, quantidade, volumes, medidas, valor NF.");

})

$('#form__mudanca__buttom').click(()=> {

    $('#form__mudanca__buttom').removeClass('--white')
    $('#form__trans__buttom').addClass('--white')

    $('.form__only__trans').addClass('hide')

    $('.form__only__trans input').prop('required', false)

    $('#transItem__quotation__obs').attr("placeholder", "Enviar a relação dos móveis a serem transportados.");
})