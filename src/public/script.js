console.log('hello from the browser JavaScript')

const ELEMENTS = {
 signupEmail: () => document.getElementById('signup-email'),
 signupUsername: () => document.getElementById('signup-username'),
 signupPwd: () => document.getElementById('signup-password'),
 signupBtn: () => document.getElementById('signupBtn')
}

console.log(ELEMENTS.signupBtn())

const UI = {

  addAllEventListeners: () => {

    ELEMENTS.signupBtn().addEventListener('click', (event) => {
      if (ELEMENTS.signupEmail().value == ''
          || ELEMENTS.signupUsername().value == ''
          || ELEMENTS.signupPwd().value == '') {
          alert('you must fill out all fields')
          event.preventDefault()
      }
    })

  }
}

UI.addAllEventListeners()
