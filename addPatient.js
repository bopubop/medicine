function addPatient() {
    // let patient = document.getElementsByTagName("input")[0].innerText;
    let p = document.getElementById('name').value;

    let lS = localStorage.getItem('name');
    let oldVal = lS;
    let newVal = oldVal +',' + p;
    alert(newVal);
    let e = localStorage.setItem('name',newVal);
    document.getElementById('name').value ='';
    console.log(e);
}
function clearAll() {
    localStorage.clear();
}