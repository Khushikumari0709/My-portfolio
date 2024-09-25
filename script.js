const scriptURL = 'https://script.google.com/macros/s/AKfycbyZNCM18tKHNZ76-_4EC_asGW6e8qQ63kZLP5m7gFaVQrSmR5h1hV3HsLFAMCvuI07F/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {console.log('Success!', response); 
          alert("Your message is sent.....");
        })
        .catch(error => console.error('Error!', error.message))
    })
