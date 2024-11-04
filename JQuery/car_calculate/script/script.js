$(document).ready(function() {

    // получение цвета
    $('.box-color span').click(function() {
        var color = $(this).attr('data-img-path')
        $('.info img').attr('src', color)
    })

    var modelSpecs, //спецификалия модели
        modelPrice,
        modelSpecsHolder, //итоговый div спецификатор
        modelPriceHolder

    modelSpecsHolder = $('#modelSpecs');
    modelPriceHolder = $('#modelPrice');

    modelPrice = 0;
    modelSpecs = '';

    function calcPrice() {
        modelPrice = parseInt($('input[name=engin]:checked', '#autoForm').val());

        modelPrice += parseInt($('input[name=gearbox]:checked', '#autoForm').val());
        modelPrice += parseInt($('input[name=package]:checked', '#autoForm').val());
        modelPriceHolder.text(addSpace(modelPrice) + ' рублей')
    }

    function commonSpecs() {
        modelSpecs = $('input[name=engin]:checked', '#autoForm').closest('label').text() + ', ';
        modelSpecs += $('input[name=gearbox]:checked', '#autoForm').closest('label').text() + ', ';
        modelSpecs += $('input[name=package]:checked', '#autoForm').closest('label').text();
        modelSpecsHolder.text(modelSpecs)
    }

    $('#autoForm input').change(function() {
        calcPrice();
        commonSpecs();
    });

    function addSpace(num) {
        var str = num.toString()
        var arr = str.split('')
        if (arr.length > 6) {
            arr.splice(1, 0, ' ')
            arr.splice(5, 0, ' ')
        } else{
            arr.splice(3, 0, ' ')
        }
        var str_new = arr.join('')
        return str_new
    }
})