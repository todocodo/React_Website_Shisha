import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import content from '../../content/subscribe.yaml'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
// library.add(fab)

export default () => (
  <section id="subscribe">
    <div className="row section-head">
      <div className="twelve columns">
        <h1>{ content.title }</h1>

        <p dangerouslySetInnerHTML={{ __html: content.body }} />
        <p style={{color: 'red'}}>{ content.body_2 }</p>
        <p>{content.flavour}  <AnchorLink to={content.link.to}>{content.link.label}</AnchorLink></p>
        
    </div>
  </div>

  <div className="row">
    <div className="twelve columns">
      <div id="mc_embed_signup">
          <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true}>
            <a href={content.insta} className="button">
              <i className="instagram_pricing"><FontAwesomeIcon icon={["fab", "instagram"]} /></i>{content.social}
            </a>
          </ScrollAnimation>
             {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
             <div style={{position: "absolute", left: "-5000px"}}>
               <input type="text" name="b_cdb7b577e41181934ed6a6a44_e65110b38d" defaultValue="" />
             </div>
             <div className="clear">
               <ScrollAnimation
                 animateIn="fadeInRightBig"
                 animateOnce={true}
               >
                 <a href={content.url} className="button">
                   {content.number}
                 </a>
               </ScrollAnimation>
             </div>
         </div>

         <p><small>{ content.small }</small></p>

       </div>

     </div>

   </section>
)
