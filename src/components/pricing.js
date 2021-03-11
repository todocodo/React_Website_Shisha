import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/pricing.yaml"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => {

  library.add(fas)

  return (
    <section id="pricing">
      <div className="row section-head">
        <h1>{ content.title }</h1>
        <p className="pricing-body">{ content.body }</p>
        <p className="pricing-offer">{ content.offer }</p>
      </div>

      <div className="row">
        <div className="pricing-tables bgrid-quarters s-bgrid-halves">
          { content.plans.map((plan, index) =>
            <div className="column">
              <div className="price-block">
                <h3 className="plan-title">
                  { plan.title }
                </h3>
                <p className="plan-price">
                  { plan.price }
                  <span className="per"> { plan.per } </span><span className="pricing-hours"> { plan.hours } </span>
                </p>

                <p className="shisha-count-price">{ plan.count }</p>
                <p className="shisha-info-price">{ plan.info }</p>

                <ul className="features">
                  { plan.features.map((feature, index) =>
                    <li><i className={feature.check}><FontAwesomeIcon icon={ feature.icon } /></i>{ feature.text }</li>
                    
                  )}
                </ul>
                <footer className="plan-sign-up">
                <AnchorLink className="button" to={plan.signup.to}>{plan.signup.label}</AnchorLink>
                </footer>
              </div>
            </div>
          )
          }
        </div>
      </div>
      <p className="pricing-body">{ content.body }</p>
    </section>
  )
}
