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

DATA = {
  removeReview: ( reviewId, target ) => {
   return fetch(`http://localhost:3000/albums/${reviewId}` , { method:"DELETE" })
   .then(response => {
     return response.text()
   })
   .then(() => {
     const card = target.parentNode.parentNode.parentNode.parentNode
     console.log(card)
     card.parentNode.removeChild(card)
   })
  }

}

UI = {

  addAllEventListeners: () => {

    if(ELEMENTS.newReviewBtn()){
      ELEMENTS.newReviewBtn().addEventListener('click', (event) => {
        console.log('click')
      if( ELEMENTS.newReviewContent().value == ''){
        alert('You must enter a review!!')
        event.preventDefault()
      }
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
      confirm("Are you sure you want to delete this review?")
       ? DATA.removeReview(parseInt(event.target.dataset.id), event.target)
       : event.preventDefault()
      })
    })

  }



}


UI.addAllEventListeners()
