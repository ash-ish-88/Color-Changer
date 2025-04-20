const buttons = document.querySelectorAll('.button');  // it select the HTML class which name is button
    const body = document.querySelector('body');      // it select the body of webpage.
    buttons.forEach(function (button) {   // we know that querySelectorAll return a nodelist so we can use forEach loop
      console.log(button);
      button.addEventListener('click',function(e) { // we add even listener on button 
        console.log(e); //This prints the entire event object in the console.

        console.log(e.target); //This is useful if you're applying different behavior based on which box was clicked — like changing background color based on e.target.id.
        switch(e.target.id)
        {
          case 'grey':
            body.style.backgroundColor = 'grey';
            break;
          case 'white':
            body.style.backgroundColor = 'white';
            break;
          case 'blue':
            body.style.backgroundColor = 'blue';
            break;
          case 'yellow':
            body.style.backgroundColor = 'yellow';
            break;
          default:
            alert('Click on the given box.');
        }
      })
    })