document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Seleciona todos os inputs e o textarea no formulário
    const fields = document.querySelectorAll('#contactForm .items, #contactForm .msg');
    let isValid = true;

    // Itera sobre cada campo para verificar se está preenchido
    fields.forEach(field => {
        const errorElement = field.nextElementSibling; // Seleciona a mensagem de erro associada

        // Verifica se o campo está vazio
        if (field.value.trim() === '') {
            field.classList.add('vazio'); // Adiciona borda vermelha
            field.classList.remove('preenchido'); // Remove borda verde
            errorElement.style.visibility = 'visible'; // Mostra a mensagem de erro
            isValid = false;
        } else {
            field.classList.remove('vazio'); // Remove borda vermelha
            field.classList.add('preenchido'); // Adiciona borda verde
            errorElement.style.visibility = 'hidden'; // Esconde a mensagem de erro
        }
    });

    // Se todos os campos forem válidos, mostrar a mensagem de sucesso
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        // Descomente a linha abaixo para enviar o formulário de fato:
        // event.target.submit();
    }
});