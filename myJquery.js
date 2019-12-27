$(document).ready(function () {
    let allDoctors = localStorage.getItem('doctors');//достать врачей по ключу 'doctors'

    var wordsDoc = allDoctors.split(',');// выделить каждого врача
    for (let i = 1; i < wordsDoc.length; i++){
        $('#docCl').append(`<option value="${wordsDoc[i]}">${wordsDoc[i]}</option>`);
    }
    $('#formId').on('submit', function (event) {
        var $docCl = $('#docCl'); //переменная для елемента с id= 'doCl'
        let doctorName = $docCl.find(":selected").text();//имя доктора из елемента 'Select'->'option'
        let namePatient = $('#patientLastName').val();//фамилия пациента
        let patientInfo = {
            namepatient:namePatient,
            doctorname:doctorName
        };
        let patientInfoJSON = JSON.stringify(patientInfo);
        let old = localStorage.getItem('patient');
        let newValue = old;
        let allValue = newValue + ',' +patientInfoJSON;
        let i = localStorage.setItem('patient',allValue);
        alert('Пациент успешно добавлен!');
    });
    $('#deleteUsers').on('click',function (event){
        localStorage.removeItem('patient');
        alert('Список пациентов успешно очищен!');
    });
    // deleteUsers



});