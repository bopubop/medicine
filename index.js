
getDoctors();
let listJsonPatientInfos = localStorage.getItem('patient');
let jsonSplit = listJsonPatientInfos.split(',{');

for (var property in jsonSplit){
    let splSpl = jsonSplit[property];
    let splSpNew = splSpl.slice(0,-1);
    let str1 = splSpNew.split(',');
    if( typeof str1[1] =='undefined'){
        console.log('undefined2222')
    }else {
        let str2 = str1[1].split(':');
        let name2 = str1[0].split(':')[1].slice(1,-1);

        console.log("yyy",name2);
        let kkk1 = document.getElementById('k1').innerText;
        let spliceKk1 = kkk1.substr(5, kkk1.length).trim();
        let kkk2 = document.getElementById('k2').innerText;
        let spliceKk2 = kkk2.substr(5, kkk1.length).trim();

        let kkk3 = document.getElementById('k3').innerText;
        let spliceKk3 = kkk3.substr(5, kkk1.length).trim();

        let spliceStr2 = str2[1].slice(1,-1);
            if(spliceStr2===spliceKk1){
                elementsCreator('forSet',name2);
            } else if(spliceStr2===spliceKk2){
                elementsCreator('forSet1',name2);
            } else if(spliceStr2===spliceKk3){
                elementsCreator('forSet2',name2);
            }
    }
}
function elementsCreator(elemName, name) {
    let forset2 = document.getElementById(elemName);
    let forTr = document.createElement("tr");
    forset2.appendChild(forTr);
    for(var i = 0; i<4; i++){
        let forTd1 = document.createElement('td');
        forTr.appendChild(forTd1);
        if(i===0){
            forTd1.appendChild(document.createTextNode(name));
        }
        if(i===1){
            forTd1.appendChild(document.createTextNode(forset2.childElementCount-1));
        }
    }
}
function getDoctors() {
        let docName = localStorage.getItem('doctors');
        let splDoc = docName.split(',');
        for (let i = 1; i < 4; i++) {
            let k =  document.getElementById('k'+i);
            k.append(splDoc[i]);
        }
}






