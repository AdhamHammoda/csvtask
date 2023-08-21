function read()
{
    var file = document.querySelector('#file').files[0];
    var button1 = document.getElementById('btnsubmit');
    button1.style.visibility="hidden";
    var button2 = document.getElementById('file');
    button2.style.visibility="hidden";
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
}