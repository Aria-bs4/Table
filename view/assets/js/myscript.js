var allinfo = new Array();
var changenode;
var sts;
var stsofedit = true;
function savedata() {
    var tr = buildtr();
    if (sts) {  // if all inputs are full
        allinfo[allinfo.length] = tr;   //build 'allinfo' for showing the info
        document.getElementById('saveddata').innerHTML = allinfo.length;
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: tr,
        });
    }


    //in case show data here
    // var parent = document.getElementById('maintable').lastChild;
    // parent.appendChild(child);

}

function showdata() {
    if (allinfo.length > 0) {         // if we have data
        for (var i = 0; i < allinfo.length; i++) {
            document.getElementById('maintable').lastChild.appendChild(allinfo[i]);
        }
        while (allinfo.length > 0) {
            allinfo.pop();
        }
        document.getElementById('saveddata').innerHTML = allinfo.length;
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'there is no data',
        });
    }

    // var l = allinfo.length
    // for (var i = 0; i < l; i++) {
    //     allinfo.pop();
    // }

}

function deletetr(btn) {
    if (stsofedit) {
        btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
    }else{
        anim()
    }
}

function edittr(btn) {
    if (stsofedit) {
        stsofedit = false;
        var info = btn.parentNode.parentNode.childNodes;
        document.getElementById("name").value = info[0].innerHTML;
        document.getElementById("family").value = info[1].innerHTML;
        document.getElementById('edirbtnbox').style.display = "block";
        document.getElementById('btnbox').style.display = "none";
        changenode = btn.parentNode.parentNode;         //this is for save the element have clicked
    } else {
        anim();
    }
}

function savecahnge() {

    var tr = buildtr();
    if (sts) {
        document.getElementById('edirbtnbox').style.display = "none";
        document.getElementById('btnbox').style.display = "block";
        changenode.parentNode.replaceChild(tr, changenode);
        stsofedit = true;
    } else {
        stsofedit = false;
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: tr,
        });
    }
}


function buildtr() {
    sts = true;
    var name = document.getElementById("name").value;
    if (name.length === 0) {
        sts = false;
        return "please fill all inputs";
    }
    var family = document.getElementById("family").value;
    if (family.length === 0) {
        sts = false;
        return "please fill all inputs";
    }

    document.getElementById("name").value = "";
    document.getElementById("family").value = "";

    var tr = document.createElement('tr');
    var td = new Array();
    for (var i = 0; i < 4; i++) {
        td[i] = document.createElement('td');
        switch (i) {
            case 0:
                td[i].innerHTML = name;
                break;
            case 1:
                td[i].innerHTML = family;
                break;
            case 2:
                td[i].innerHTML = '<button onclick="edittr(this)" class="editbtn">edit</button>';
                break;
            case 3:
                td[i].innerHTML = '<button onclick="deletetr(this)" class="deletebtn">delete</button>';
                break;
        }
        tr.appendChild(td[i]);
    }
    return tr;
}

function anim(){
    // document.getElementById('savechange').style.animation ="none";
    // document.getElementById('savechange').offsetHeight;
    document.getElementById('savechange').style.animation = 'dance-shadow .3s ease 4';
    myVar = setTimeout(timeout , 1300);
}

function timeout(){
    document.getElementById('savechange').style.animation ="none";
    document.getElementById('savechange').offsetHeight;
    clearTimeout(myVar);
}