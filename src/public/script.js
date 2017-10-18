console.log('hello from the browser JavaScript')

const ELEMENTS = {
 signupEmail: () => document.getElementById('signup-email'),
 signupUsername: () => document.getElementById('signup-username'),
 signupPwd: () => document.getElementById('signup-password'),
 signupBtn: () => document.getElementById('signupBtn'),
 deleteBtn: () => document.querySelectorAll('.delete')
}

console.log(ELEMENTS.deleteBtn())

CONTROLLER = {
  deleteTodo: (event) => {
    const id = event.target.dataset.id
    const target = event.target
    DATA.deleteTodo(id)
    .then(response => {
      UI.deleteTodo(target)
    })
    .catch(error = console.error)
  }

}

DATA = {
  removeReview: ( reviewId, target ) => {
   return fetch(`http://localhost:3000/albums/${reviewId}` , { method:"DELETE" })
   .then(response => {
     return response.text()
   })
  }

}

const UI = {

  addAllEventListeners: () => {

    if (ELEMENTS.signupBtn()){
      ELEMENTS.signupBtn().addEventListener('click', (event) => {
        if (ELEMENTS.signupEmail().value == ''
        || ELEMENTS.signupUsername().value == ''
        || ELEMENTS.signupPwd().value == '') {
          alert('you must fill out all fields')
          event.preventDefault()
        }
      })
    }

    ELEMENTS.deleteBtn().forEach(tile => {
      tile.addEventListener('click', (event) => {
        console.log('clickies')
      confirm("Are you sure you want to delete this review?")
      //  ? CONTROLLER.removeReview(event)
      //  : event.preventDefault()
      })
    })

  },
  deleteTodo: (element) => {
      const card = element.parentNode.parentNode
      card.parentNode.removeChild(card)
    }
  

}

UI.addAllEventListeners()
