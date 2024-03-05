const app =  require("./app")
const port = process.env.PORT || 3000

app.listen(port, () => { //passar crazi para entender que o port é variavel
    console.log(`Server listening on port ${port}`)
})