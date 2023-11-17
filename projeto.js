        const form = document.getElementById('form');
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const numero = document.getElementById('numero');
        const pizza = document.getElementById('pizza'); // Adicione o ID correspondente ao select da pizza
        const coca = document.getElementById('coca'); // Adicione o ID correspondente ao select da bebida
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        
        form.addEventListener('submit', function salvardados(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário
        
            // Obter os valores do formulário
            let novoNome = nome.value;
            let novoTelefone = telefone.value;
            let novoNumero = numero.value;
            let novoPizza = pizza.value;
            let novaCoca = coca.value;
        
            // Criar uma nova linha na tabela
            let newRow = tabela.insertRow();
        
            // Adicionar células à nova linha
            let cellNome = newRow.insertCell(0);
            let cellTelefone = newRow.insertCell(1);
            let cellNumero = newRow.insertCell(2);
            let cellPizza = newRow.insertCell(3);
            let cellCoca = newRow.insertCell(4);
        
            // Adicionar os valores do formulário às células
            cellNome.innerHTML = novoNome;
            cellTelefone.innerHTML = novoTelefone;
            cellNumero.innerHTML = novoNumero;
            cellPizza.innerHTML = novoPizza;
            cellCoca.innerHTML = novaCoca;
        
            // Limpar o formulário após adicionar à tabela
            form.reset();
        });