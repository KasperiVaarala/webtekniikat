var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
// tarkista alert trigger
if (alertTrigger) {
    // luuo taphtuman käsittelijä
  alertTrigger.addEventListener('click', function () {
      //tarkista onko etunimi syötetty
      if (document.getElementById('firstname').value.length > 0){
         //kutsu alert funktio
    alert('Form sent', 'gj big man')
      } else {
          alert('Cmon firstname mf')
      }
  })
}