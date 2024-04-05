function buttonclick(val){
    document.getElementById("output").value+=val
}

function clears(){
    document.getElementById("output").value=""
}

function equalClick1(){
    const txt = document.getElementById("output").value
    var result=eval(txt)
    document.getElementById('output').value=result
}
