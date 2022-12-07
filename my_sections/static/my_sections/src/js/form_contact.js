var form = document.getElementById("form_contact");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Enviado com sucesso!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = "Preencha o formulário."
                } else {
                    status.innerHTML = "Oops! Falha no envio."
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Falha no envio."
    });
}

form.addEventListener("submit", handleSubmit)
