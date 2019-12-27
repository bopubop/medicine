$(document).ready(function () {

    $('#form').on('submit', function (event) {
        event.preventDefault();//запрет перезагрузки
        let nameDoctors = $('#doctorLastName').val();
        let oldValue = localStorage.getItem('doctors');
        let newVal = oldValue;
        let allValue = newVal + ',' + nameDoctors;
        let lS = localStorage.setItem('doctors',allValue);

    });
});
