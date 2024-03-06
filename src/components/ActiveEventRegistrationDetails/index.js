// Write your code here
const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationstatus} = props

  const renderNoActiveEvent = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderregistrationsClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Colsed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>Yow have already regestered</p>
    </div>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeRegistrationstatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderregistrationsClosedView()
      default:
        return renderNoActiveEvent()
    }
  }
  return <div>{renderActiveRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
