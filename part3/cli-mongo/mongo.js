const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

let operation = null

if (process.argv.length !== 3 && process.argv.length !== 5) process.exit(1)
else if (process.argv.length === 3) operation = 'showRecords'
else operation = 'addPerson'

const password = process.argv[2]
const url = `mongodb+srv://dapalm:${password}@cluster0.sv0hnha.mongodb.net/phonebook?retryWrites=true&w=majority`
const name = process.argv[3]
const phoneNumber = process.argv[4]

mongoose.connect(url)

const PersonSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String
})

const Person = mongoose.model('Person', PersonSchema, 'persons')

const person = new Person({
  name: name,
  phoneNumber: phoneNumber
})

if (operation === 'addPerson') {
  person.save().then(() => {
    console.log(
      `Added ${person.name} number ${person.phoneNumber} to phonebook`
    )
    mongoose.connection.close()
  })
}

if (operation === 'showRecords') {
  console.log('Phonebook:')
  Person.find({}).then((persons) => {
    persons.forEach((person) => {
      console.log(`${person.name} ${person.phoneNumber}`)
    })
    return mongoose.connection.close()
  })
}
