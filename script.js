function cadastrar() 


    const nome =

        document

        .getElementById("nome")

        .value

        .trim();


    const email =

        document

        .getElementById("email")

        .value

        .trim();


    const senha =

        document

        .getElementById("senha")

        .value;


    const idade =

        document

        .getElementById("idade")

        .value;


    const mensagem =

        document

        .getElementById("mensagem");



    /* Verifica os campos */

    if (

        nome === "" ||

        email === "" ||

        senha === "" ||

        idade === ""

    ) {


        mensagem.textContent =

            "Preencha todos os campos.";


        mensagem.className =

            "erro";


        return;

    }
