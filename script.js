$(function(){

         
        
    
        $('#sp_celphones').mask('(00) 00000-0000');
        $('#cep').mask('00000-000');
        $("#telefone").mask("(99) 99999-9999"); 
        $("#cep").mask("99999-999");

        function createDOMElement(str) {
            let temp=document.createElement("template");
            temp.innerHTML = str.trim();
            return temp;
        }
        

        
        
        
            document.salvar = salvar;

            function salvar(){

            try{

                var linhaNova = createDOMElement(`
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                `);
                
                setCellDadosValue("nome", linhaNova);
                setCellDadosValue("dtnasc", linhaNova);
                setCellDadosValue("telefone", linhaNova);
                setCellDadosValue("endereco", linhaNova);
                setCellDadosValue("bairro", linhaNova);
                setCellDadosValue("cidade", linhaNova);
                setCellDadosValue("cep", linhaNova);
                setCellDadosValue("email", linhaNova);
                
                
                
             
            
                let content = document.getElementById("dados").innerHTML;
            

                document.getElementById("dados").innerHTML = content + linhaNova.innerHTML; 
                              

                limparCampos();

            }
            catch(error){
                alert(error);
            }
        }

        function limparCampos(){

            $("#nome").val(''); // Jquery
            $("#dtnasc").val(''); 
            $("#telefone").val(''); 
            $("#endereco").val(''); 
            $("#bairro").val('');
            $("#cidade").val(''); 
            $("#cep").val(''); 
            $("#email").val(''); 

        }
        
        const validacoes = {
            nome: validaNome, 
            dtnasc: validaDtnasc,
            telefone: validaTelefone,
            endereco: validaEndereco,
            bairro: validaBairro,
            cidade: validaCidade,
            cep: validaCep,
            email: validaEmail,
        };

        function validaNome(value) {
            if(value == '')
                return "O campo nome ?? obrigat??rio.";

            if(value.length < 5 || value.length > 60)
                return "O campo nome precisa ter de 5 a 60 caract??res.";
        }

        //function validaIdade(value) {
            //if(value == '')
                //return "O campo idade ?? obrigat??rio.";            

            //if(parseInt(value) < 1 || parseInt(value) > 120)
                //return "A idade precisar estar entre 1 e 120.";
        //}

        function validaDtnasc(value) {
            if(value == '')
                return "O campo data de nascimento ?? obrigat??rio.";            

            
        }

        function validaTelefone(value) {
            if(value == '')
                return "O campo telefone ?? obrigat??rio.";

            if(!value.match(/^\([0-9]{2}\)[ ][0-9]{5}[-][0-9]{4}$/))
                return "Insira um telefone v??lido.";
        }

        function validaEndereco(value) {
            if(value == '')
                return "O campo endereco ?? obrigat??rio.";

            if(value.length > 120)
                return "O campo endereco precisa ter no m??ximo 120 caract??res.";
        }

        function validaBairro(value) {
            if(value == '')
                return "O campo bairro ?? obrigat??rio.";

            if(value.length > 40)
                return "O campo bairro precisa ter m??ximo 40 caract??res.";
        }

        function validaCidade(value) {
            if(value == '')
                return "O campo cidade ?? obrigat??rio.";

            if(value.length > 40)
                return "O campo cidade precisa ter m??ximo 40 caract??res.";
        }

        function validaCep(value) {
           if(value == '')
                return "O campo cep ?? obrigat??tio.";
                 
            if(value.length > 9)
                return "O campo cep precisa ter m??ximo 9 caracteres.";

             if(!value.match(/^[0-9]{5}[-][0-9]{3}$/))
                 return "O campo cep precisa ter m??ximo 9 caracteres.";
		}

        function validaEmail(value) {
            if(value == '')
                return "O campo email ?? obrigat??rio.";

			if(!value.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
                return "Digite um e-mail v??lido";

        }  

        function setCellDadosValue(name, linhaNova) {
            var error = validacoes[name] && validacoes[name](getFieldValue(name));
        
            if(error){
                throw Error(error);
            }
            var campos = ["nome", "dtnasc", "telefone", "endereco", "bairro", "cidade","cep","email",];
            var cellIndex = campos.indexOf(name);
            setCellValue(linhaNova, cellIndex, getFieldValue(name));
        }

        function getFieldValue(name){
            return document.getElementById(name).value;
        }

        function setCellValue(linhaNova, cellIndex, value){
            linhaNova.content.firstChild.getElementsByTagName('td')[cellIndex].innerText = value;
        }
        

        

        //function atribuiValorCelulaTabela(name, linhaNova) {

            //obt??m valor do campo e atribui a uma vari??vel
            //var valor = obterValorCampo(name);

            //valida valor do campo e retorna erro se houver.
            //var error = validacoes[name] && validacoes[name](valor);
        
            //se houver erro lan??a uma exce????o
            //if(error){
                //throw Error(error);
            //}

            //armazena nomes dos campos existentes em uma array
            //var campos = ["nome", "dtnasc", "telefone", "endereco", "bairro", "cidade","cep","email",];

            //obt??m o indice de um dos itens da array pelo nome do campo e armazena numa variavel
            //var indiceCelula = campos.indexOf(name);

            //insere valor na celula na linha nova
            //linhaNova.content.firstChild.getElementsByTagName('td')[indiceCelula].innerText = valor;

        //}

        function obterValorCampo(name){
            //document.getElementById(name).value;

            $("#nome").obterValorCampo('');
            $("#dtnasc").obterValorCampo('');
            $("#telefone").obterValorCampo('');
            $("#endereco").obterValorCampo('');
            $("#bairro").obterValorCampo('');
            $("#cidade").obterValorCampo('');
            $("#cep").obterValorCampo('');
            $("#email").obterValorCampo('');
        }

        
         /*
            valida????o
            a aparencia dos campos
                cep: com mascara e valida????o 00000-000
                emal: s?? valida????o
                nome: min: 5, max 60, required
                idade: min 0, max 120, required
                telefone: formato 00 00000-0000
                endere??o: max characteres 120, required
                bairro: max characteres 40, required
                cidade: max characteres 40, required
        */
               
});