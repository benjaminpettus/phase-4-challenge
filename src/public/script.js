console.log('hello from the browser JavaScript')

const ELEMENTS = {
 signupEmail: () => document.getElementById('signup-email'),
 signupUsername: () => document.getElementById('signup-username'),
 signupPwd: () => document.getElementById('signup-password'),
 signupBtn: () => document.getElementById('signupBtn'),
 deleteBtn: () => document.querySelectorAll('.delete')
}

// CONTROLLER = {
//   removeReview: (event) => {
//     const id = event.target.dataset.id
//     const target = event.target
//     DATA.removeReview(id)
//     .then(review => {
//         const card = target.parentNode.parentNode.parentNode.parentNode.parentNode
//         card.parentNode.removeChild(card)
//     })
//     .catch(error = console.error)
//   }
//
// }
///
// const deleteReview = ( reviewId, target ) => {
//  fetch(`http://localhost:3000/reviews/${reviewId}` , { method:"DELETE" })
//  .then(response => {
//    return response.text()
//  })
//  .then(() => {
//    const card = target.parentNode.parentNode
//    card.parentNode.removeChild(card)
//  })
//  .catch( error => console.error )
//  }
///
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
