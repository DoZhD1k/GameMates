import React from 'react'
import "./ContactsHeader.css"

const ContactsHeader = () => {
  return (
    <div className="card-header">
	    <div className="input-group">
		    <input type="text" placeholder="Search..." className="form-control search" />
		    <div className="input-group-prepend">
			    <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
		    </div>
	    </div>
	</div>
  )
}

export default ContactsHeader