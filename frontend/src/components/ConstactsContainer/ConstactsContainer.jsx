import React from 'react'
import "./ConstactsContainer.css"
// import ContactsHeader from '../ContactsHeader/ContactsHeader'
import ContactsBody from '../ContactsBody/ContactsBody'

const ConstactsContainer = () => {
  return (
    <div className="col-md-4 col-xl-3 chat">
        <div>
            {/* <ContactsHeader /> */}
            <ContactsBody />
        </div>
    </div>
  )
}

export default ConstactsContainer