'use strict'
const express = require('express')

const {google} = require('googleapis')

const cors = require('cors')

// Create the express app
const app = express()


const {OAuth2} = google.auth
const oAuth2Client = new OAuth2(
  'enter clientID',
  'enter clientSecret'
)

oAuth2Client.setCredentials({
  access_token: 'Access token here'
})

const calendar = google.calendar({
  version: 'v3',
  auth: oAuth2Client
})

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)
app.use(cors())
app.use(express.json())

app.post('/events', (req, response) => {
  console.log('req', req.body)
  const speci = req.body.date
  console.log(speci)
  const start = new Date(`${speci}T00:00:00`)
  const end = new Date(`${speci}T23:00:00`)
  const appointments = []
  calendar.events.list({
      calendarId: 'c_j6s9iu2l9vmndvd2d248sh3bek@group.calendar.google.com',
      timeMin: start,
      timeMax: end,
      singleEvents: true,
      orderBy: 'startTime'
  }, (err, res) => {
      const events = res.data.items
      console.log(events)
      var num = 1
      events.forEach(element => {
          const dateElement = new Date(element.start.dateTime)
          const timeElement = dateElement.toLocaleTimeString('en-US')
          const dayElement =dateElement.toLocaleDateString()
          appointments.push({
              id: num,
              name: element.summary,
              address: element.location,
              time: timeElement,
              date: dayElement,
              type: 'Moderna'
          })
          num = num + 1
      });
      console.log(appointments)
      return response.send({appointments:appointments})
  })

})

// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(3001, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:3001')
})

