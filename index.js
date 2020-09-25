function fixElement(element, message) {
  alert(message)
  element.focus()
}
function isMailReady(form) {
  var passed = false
  if (form.fullname.value == '') {
    fixElement(form.fullname, 'Information saknas i fältet namn!')
  } else if (
    form.email.value.indexOf('@') == -1 ||
    form.email.value.indexOf('.') == -1
  ) {
    fixElement(form.email, 'Ange en giltig epostadress i fältet epost!')
  } else if (form.tele.value == '') {
    fixElement(form.tele, 'Du har inte skrivit något telefonnummer!')
  } else {
    passed = true
  }
  return passed
}
