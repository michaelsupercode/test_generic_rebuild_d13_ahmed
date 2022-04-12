const cors = require("cors")
const express = require("express")
const multer = require("multer")
const { nanoid } = require("nanoid")

const usersArray = []

const PORT = 9000
const app = express()

app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})

app.use(cors())
app.use(express.json())

app.use(express.static("uploads"))

app.get("/users", (req, res) => {
    res.json(usersArray)
})

app.get("/users/:id", (req, res) => {
    const userId = req.params.id
    const foundUser = usersArray.find(u => u.id === userId)
    if (foundUser) {
        res.json(foundUser)
    } else {
        res.status(404).send({ error: "..no such user!.." })
    }
})

const upload = multer({ dest: 'uploads/' })
const uploadFilesMiddleware = upload.single('avatar')
app.post("/createFlakebookProfile",
    uploadFilesMiddleware,
    (req, res) => {
        console.log(req.body)
        console.log(req.file)
        console.log(req.files)

        const newUser = {
            id: nanoid(),
            username: req.body.username,
            email: req.body.email,
            avatarImgSrc: req.file.filename
        }

        usersArray.push(newUser)
        res.json(usersArray)
    }
)

app.listen(PORT, () => console.log("server listening on port", PORT))