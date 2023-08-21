 function Xisob() {
    let ASon = document.getElementById("ASon").value
    let BSon = document.getElementById("BSon").value
    let Oper = document.getElementById("oper").value


    ASon =  parseFloat(ASon)
    BSon = parseFloat(BSon)
 


    result = ""
    switch (Oper) {
        case "+":
            result += ASon + BSon
            break
        case "-":
            result += ASon - BSon
            break
        case "*":
            result += ASon * BSon
            break
        case "/":
            result += ASon / BSon
            break
        default:
            alert("A son va B sonlarni qiymatini kiriting")
    }

    document.getElementById("display").innerHTML = result
}