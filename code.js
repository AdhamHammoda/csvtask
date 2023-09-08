function read()
{
    let pr= new Promise( (resolvef,rejectf) => {
    var file = document.querySelector('#file').files[0];
    if(file.type==="text/csv")
    {
        resolvef(file);
    }
    else
    {
        rejectf();
    }
    })
    pr.then( (file) => {
    var button1 = document.getElementById('btnsubmit');
    button1.style.visibility="hidden";
    var button2 = document.getElementById('file');
    button2.style.visibility="hidden";
    console.log(file);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) 
    {
        var csvdata=event.target.result;
        var rowdata=csvdata.split('\n');
        var tbodyelement=document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
        tbodyelement.innerHTML="";
        for (var row=0;row<10;row++) 
        {
            var currentrow=tbodyelement.insertRow();
            coldata=rowdata[row].split(',');
            for (var col=0;col<coldata.length;col++) 
            {
                    var newcell=currentrow.insertCell();
                    newcell.innerHTML=coldata[col];
            }
        }
    };
    }).catch( () => {
        var ff=document.getElementById('file');
        ff.value="";
        alert("Please choose a correct file type")
    })
}