const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEvnet = () => {
    setActiveEventId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEvnet}>
        <img src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
