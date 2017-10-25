console.log('hello from the browser JavaScript')

const ELEMENTS = {
 signupEmail: () => document.getElementById('signup-email'),
 signupUsername: () => document.getElementById('signup-username'),
 signupPwd: () => document.getElementById('signup-password'),
 signupBtn: () => document.getElementById('signupBtn'),
 deleteBtn: () => document.querySelectorAll('.delete'),
 newReviewContent: () => document.getElementById('new-review'),
 addReviewBtn: () => document.querySelector('.newnew')

}

CONTROLLER = {
  deleteReview: (event) => {
    const target = event.target
    const id = event.target.dataset.id
    console.log(id)
    DATA.deleteReview(id)
    .then(response => {
      console.log(' from controller :::',response)
      UI.removeCard(target)
    })
    .catch(error => console.error )
  }
}

DATA = {
  deleteReview: ( id ) => {
   return fetch(`http://localhost:3000/albums/${id}` , { method: 'DELETE', mode: 'no-cors' })
   .then(response => {
     return response.text()
   })
  }

}

UI = {
  removeCard: (target) => {
    const card = target.parentNode.parentNode.parentNode
    console.log('card:::', card)
    const parent = card.parentNode
    console.log('parent node::::',parent)
    parent.removeChild(card)
  },

  addAllEventListeners: () => {

      if (ELEMENTS.addReviewBtn()){
        ELEMENTS.addReviewBtn().addEventListener('click', (event) => {
          if (ELEMENTS.newReviewContent().value == '') {
            alert('you must enter a review')
            event.preventDefault()
          }
        })
      }

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
      console.log('click', event.target.parentNode.parentNode.parentNode)
      confirm("Are you sure you want to delete this review?")
       ? CONTROLLER.deleteReview(event)
       : event.preventDefault()
      })
    })

  }



}


UI.addAllEventListeners()
