const links = document.getElementsByTagName('a')
for (let i of links)
	if (i.target == "") i.target = '_blank'
// console.log("Hey see I'm working")
const contactForm = document.getElementById('contactForm')
if (contactForm != null) contactForm.addEventListener('submit', (e) => {
	e.preventDefault()
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var message = document.getElementById('message').value
	var formData = {
		name: name,
		email: email,
		message: message
	}
	fetch('save', {
		method: 'post',
		body: JSON.stringify(formData),
		headers: {
			"Content-Type": "application/json"
		}
	}).then((res) => {
		alert("Your message received!")
		contactForm.reset()
		document.location.href = 'home'
	}).catch((e) => console.error(e))
})