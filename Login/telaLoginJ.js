function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector ('#msgError')
    let listaUser = []

    let userValid = { 
        nome: '',
        user: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })
  if (usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href = '../Logado/logado.html'
  } else{
     userLabel.setAttribute('style', 'color: red')
     usuario.setAttribute('style', 'border-color: red')
     senhaLabel.setAttribute('style', 'color: red')
     senha.setAttribute('style', 'border-color: red')
     msgError.setAttribute('style','display: block')
     msgError.innerHTML = 'Usuario ou senha incorretos'
  }

}
