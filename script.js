var abrirmodal = document.querySelector("#open-modal");
var fecharmodal = document.querySelector("#enviar");
var modal = document.querySelector("#modal");
var fade = document.querySelector("#modal-fade");


function abrirFechar(){

    modal.showModal()

}

fecharmodal.addEventListener("click", () => {
modal.close();})


function mascara_telefone ()
{
    var telefone = 
    document.getElementById("telefone").value
    console.log(telefone)
    telefone = telefone.slice(0,14)
    console.log(telefone)
    document.getElementById("telefone").value = telefone

    telefone=document.getElementById("telefone").value.slice(0,10)

    console.log(telefone)

    var telefone_formatado = document.getElementById("telefone").value
        if (telefone_formatado[0] != "("){
            if (telefone_formatado[0] != undefined){
                     document.getElementById("telefone").value = "(" + telefone_formatado[0];
                    }
                }

                if (telefone_formatado[3] != ")"){
                    if (telefone_formatado[3] != undefined){
                        document.getElementById("telefone").value = telefone_formatado.slice(0,3) + ")" + telefone_formatado[3];
                    }
                }

                if (telefone_formatado[9] != "-"){
                    if(telefone_formatado[9] != undefined){
                        document.getElementById("telefone").value = telefone_formatado.slice(0,9) + "-" + telefone_formatado[9];
                    }
                }

                localStorage.setItem("telefone", telefone_formatado)

            }
            addEventListener("DOMContentLoaded", () =>{
                var recebe_telefone = localStorage.getItem("telefone")
                document.getElementById("recebe_telefone").value = recebe_telefone
            })

            function mascara_cpf(){
                var cpf = document.getElementById("CPF").value
                console.log(cpf)
                cpf = cpf.slice(0,14)
                console.log(cpf)
                document.getElementById("CPF").value = cpf
                
                cpf = document.getElementById("CPF").value.slice(0,11)
                console.log(cpf)
            
                var cpf_formatado = document.getElementById("CPF").value
            
                if (cpf_formatado[3] != "."){
                    if(cpf_formatado[3] != undefined){
                        document.getElementById("CPF").value = cpf_formatado.slice(0,3) + "." + cpf_formatado[3];
                    }
                }
            
                if (cpf_formatado[7] != "."){
                    if(cpf_formatado[7] != undefined){
                        document.getElementById("CPF").value = cpf_formatado.slice(0,7) + "." + cpf_formatado[7];
                    }
                }
            
                if (cpf_formatado[11] != "-"){
                    if (cpf_formatado[11] != undefined){
                        document.getElementById("CPF").value = cpf_formatado.slice(0,11) + "-" + cpf_formatado[11];
                    }
                }
            
                localStorage.setItem("cpf", cpf_formatado)
            }
            
            addEventListener("DOMContentLoaded", () =>{
                var recebe_cpf = localStorage.getItem("cpf")
                document.getElementById("recebe_cpf").value = recebe_cpf
            })

            
                localStorage.setItem("codigo", cod_formatado)
            
            addEventListener("DOMContentLoaded", () => {
                var recebe_cod = localStorage.getItem("codigo")
                document.getElementById("recebe_codigo").value = recebe_cod
            })