        const form = document.getElementById('form');
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const numero = document.getElementById('numero');
        const pizza = document.getElementById('pizza'); 
        const coca = document.getElementById('coca');
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        
        function salvardados(){ 
            
            // captura dados
            let novoNome = nome.value;
            let novoTelefone = telefone.value;
            let novoNumero = numero.value;
            let novoPizza = pizza.value;
            let novaCoca = coca.value;
        
            // Criar linha tabela
            let newRow = tabela.insertRow();
            let cellNome = newRow.insertCell(0);
            let cellTelefone = newRow.insertCell(1);
            let cellNumero = newRow.insertCell(2);
            let cellPizza = newRow.insertCell(3);
            let cellCoca = newRow.insertCell(4);
        
            cellNome.innerHTML = novoNome;
            cellTelefone.innerHTML = novoTelefone;
            cellNumero.innerHTML = novoNumero;
            cellPizza.innerHTML = novoPizza;
            cellCoca.innerHTML = novaCoca;
            
            localStorage.setItem('index', JSON.stringify(index));
            window.location.href= "./index.html";

            form.reset();
        }