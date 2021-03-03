import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const { social, footer, contacts } = useSiteMetadata()
  return (
    <footer>
      <div className="row">
        <div className="six columns info">
          <div className="row">
            <div className="four columns logo-footer">
              <img className="img-footer" src={footer.logo} alt="" />
            </div>
            <div className="eight columns logo-text-footer">
              <p style={{color: 'white'}}>Shisha Delivery</p>
              <p style={{color: 'orange'}}>Guildford</p>
            </div>
          </div>
        </div>

        <div className="six columns right-cols">
          <div className="row">
            <div className="columns">
              <FontAwesomeIcon icon={faUsers} />
              <h3 className="social">socialize</h3>
              <ul>
                {social.map(mySocial =>
                  <li><a href={mySocial.url}>
                    {mySocial.service}
                  </a></li>
                )}
              </ul>
            </div>

            <div className="columns last">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3 className="contact">Contact Us</h3>
              <ul>
                {contacts.map((contact, index) =>
                  <li><a href={contact.url}>{contact.text}</a></li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">&copy; 2020 ShishaDeliveryGuildford | Design by todocodo </p>

        <div id="go-top">
          <button title="Back to Top" onClick={() => scrollTo('#top')}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
    </footer>

  )
}
