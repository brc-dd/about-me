var body = document.body
var anchor = (id) => {
	var element = document.getElementById(id)
	id = id.toLowerCase()
	var overlay = document.getElementById('overlay-' + (id[0] == '_' ? id.substr(1) : id))
	var container = document.getElementById('table-container-' + (id[0] == '_' ? id.substr(1) : id))
	element.onclick = (e) => {
		e.preventDefault()
		overlay.style.display = 'block'
		body.classList.toggle('noscroll', true)
	}
	overlay.onclick = (e) => {
		e.preventDefault()
		if (!container.contains(e.target)) {
			overlay.style.display = 'none'
			body.classList.toggle('noscroll', false)
		}
	}
}
anchor('BTech')
anchor('_12th')
anchor('_10th')
var tables = document.getElementsByClassName('subject-table')
var next = (e) => {
	e.preventDefault()
	for (let i = 0; i < tables.length; i++)
		if (!tables[i]['hidden']) {
			tables[i].setAttribute('hidden', '')
			tables[((i + 1) < tables.length) ? (i + 1) : 0].removeAttribute('hidden')
			break
		}
}
var controller_next = document.getElementsByClassName('carousel-control-next-icon')
for (let i of controller_next) i.onclick = next
var prev = (e) => {
	e.preventDefault()
	for (let i = tables.length - 1; i >= 0; i--)
		if (!tables[i]['hidden']) {
			tables[i].setAttribute('hidden', '')
			tables[((i - 1) >= 0) ? (i - 1) : tables.length - 1].removeAttribute('hidden')
			break
		}
}
var controller_prev = document.getElementsByClassName('carousel-control-prev-icon')
for (let i of controller_prev) i.onclick = prev