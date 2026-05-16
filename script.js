function copyLoadstring(){

const text =
`loadstring(game:HttpGet("https://anonymous9xloader.vercel.app/VIP"))()`

navigator.clipboard.writeText(text)

showCopyPopup()
}

function showCopyPopup(){

const popup =
document.createElement("div")

popup.className = "copypopup"

popup.innerHTML = `

<div class="copypopupbox">

<h2>
LOADSTRING COPIED
</h2>

<p>
EN :<br>
You successfully copied the loadstring.<br>
Paste it into your favorite executor.
</p>

<p>
ID :<br>
Kamu berhasil copy loadstring.<br>
Silahkan paste ke executor kesayangan kamu.
</p>

</div>

`

document.body.appendChild(popup)

setTimeout(() => {

popup.remove()

}, 2500)
}

function blocked(){

document.getElementById("popup")
.style.display = "flex"

setTimeout(() => {

closePopup()

}, 2000)
}

function closePopup(){

document.getElementById("popup")
.style.display = "none"
}

document.addEventListener(
"contextmenu",
e => e.preventDefault()
)

const canvas =
document.getElementById("particles")

const ctx =
canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i = 0; i < 90; i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2,

speedX:(Math.random()-0.5)*0.5,

speedY:(Math.random()-0.5)*0.5
})
}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
)

ctx.fillStyle =
"rgba(255,255,255,0.15)"

for(let i=0;i<particles.length;i++){

let p = particles[i]

ctx.beginPath()

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
)

ctx.fill()

p.x += p.speedX
p.y += p.speedY

if(p.x < 0 || p.x > canvas.width)
p.speedX *= -1

if(p.y < 0 || p.y > canvas.height)
p.speedY *= -1
}

requestAnimationFrame(animate)
}

animate()