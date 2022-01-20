function toggleModal(modal, type, input, inputVal, typeOfInput){
    
    if(document.getElementById(modal).id != 'switchMyData__modal'){
        $(`#${modal}`).toggleClass('hide')

    }else{
        if($(`#${modal}`).hasClass('hide')){
            document.getElementById('modalTitle').innerHTML = type
            document.getElementById('modalType').innerHTML = type
            document.getElementById('modalInput').innerHTML = type
    
            document.getElementById(input).inputVal = typeOfInput
        
            document.getElementById(input).value = document.getElementById(inputVal).innerText
    
            $(`#${modal}`).toggleClass('hide') 
        } else{
            $(`#${modal}`).toggleClass('hide')    
        }
    }

}

function switchRotes(obj){
    $(obj).toggleClass('disabled')
}

// Tutorial
function nextModal(modal){

    var helpText = document.getElementById('howWorks__text')
    var helpButton = document.getElementById('howWorks__button')
    var addButton = document.getElementById('howWorks__addButton')
    var addButton2 = document.getElementById('howWorks__addButton2')


    if($('#howWorks__modal').hasClass("tutorial1")){
        helpText.innerHTML = "Ao clicar em um Estado, você verá todos os municíos disponíveis do mesmo. Selecionando um município fará com que ele fique disponível. Você também pode desmarcar um município específico se desejar."
        helpButton.innerHTML = "Proximo (2/3)"
        addButton.innerText = "SÃO PAULO"
        addButton2.innerText = "GUARULHOS"

        $('#howWorks__modal').removeClass("tutorial1")
        $('#howWorks__modal').addClass("tutorial2")

    } else if($('#howWorks__modal').hasClass("tutorial2")){
        helpText.innerHTML = "Você pode clicar em <strong>ADICIONAR TODOS</strong> para adicionar todas as rotas, tanto para os estados quanto para os municípios."
        helpButton.innerHTML = "Entendido"
        addButton.innerHTML = "ADICIONAR TODOS..."

        $('#howWorks__addAllRotes_text').removeClass("col-lg-4")
        $('#howWorks__addAllRotes_text').removeClass("col-md-5")
        $('#howWorks__addAllRotes_text').removeClass("col-sm-12")
        $('#howWorks__addAllRotes_text').addClass("col-auto")

        $('.howWorks__field').css("display", "none")

        $('#howWorks__modal').removeClass("tutorial2")
        $('#howWorks__modal').addClass("tutorial3")

        $('#howWorks__doubt__text').removeClass('hide')

    } else if($('#howWorks__modal').hasClass("tutorial3")){
        $(`#${modal}`).toggleClass('hide')

        $('.howWorks__field').css("display", "block")

        $('#howWorks__addAllRotes_text').addClass("col-lg-4")
        $('#howWorks__addAllRotes_text').addClass("col-md-5")
        $('#howWorks__addAllRotes_text').addClass("col-sm-12")
        $('#howWorks__addAllRotes_text').removeClass("col-auto")

        helpText.innerHTML = "Ao selecionar um estado você verá todos os municípios disponíveis para escolher. Ao adicionar rotas em algum estado, ele ficará com o fundo azul e as rotas ficarão disponíveis."
        helpButton.innerHTML = "Proximo (1/3)"
        addButton2.innerHTML = "MG"
        addButton.innerHTML = "SP"

        $('#howWorks__doubt__text').addClass('hide')

        $('#howWorks__modal').removeClass("tutorial3")
        $('#howWorks__modal').addClass("tutorial1")
    }

}

// 
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