import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="row">
      <div className="twelve columns">

        <div className="hero-image">
          <img src={content.image} alt="" className="animated fadeInUpBig" />
        </div>

        <div className="hero-text">
          <h1 className="responsive-headline hero-text-1">{content.headline}</h1>
          <h1 className="responsive-headline hero-text-2">{content.headline2}</h1> 
        </div>
        <p className="hero-body">{content.body}</p>

        <div className="buttons">
          <AnchorLink className="button trial animated shake" to={content.button1.to}>{content.button1.label}</AnchorLink>
          <AnchorLink className="button learn-more" to={content.button2.to}>{content.button2.label}</AnchorLink>
        </div>


      </div>
    </div>
  </section>
)
