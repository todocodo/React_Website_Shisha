import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import content from "../../content/features.yaml"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => (
  

  <section id='features'>
    {content.map((value, index) => {

      let pos, imagepos
      if (index%2 === 0){
        pos = "right"
        imagepos = "left"
      }else{
        pos = "left"
        imagepos = "right"
      }

      let media
      if (value.image){
        media = ( <img src={ value.image } alt="" /> )
      } else if (value.vimeo) {
        media = (
            <div className="fluid-video-wrapper">
              <iframe className="video-add"
                title={value.videoTitle}
                src={value.vimeo}
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                >
              </iframe>
            </div>
        )
      }
      library.add(fas)
      return(
        
        <div className={ 'row feature ' + value.name }>
          <div className={ 'six columns ' + pos }>
            <h1 className="heading-features">{ value.heading }</h1>
            <h3><i className="fa-icon"><FontAwesomeIcon icon={ value.fa } /></i>{ value.title }</h3>
            <p>{ value.body }</p>
            <h3><i className="fa-icon"><FontAwesomeIcon icon={ value.fa_2 } /></i>{ value.title_2 }</h3>
            <p>{ value.body_2 }</p>
            <h3><i className="fa-icon"><FontAwesomeIcon icon={ value.fa_3 } /></i>{ value.title_3 }</h3>
            <p>{ value.body_3 }</p>
            <h3><i className="fa-icon"><FontAwesomeIcon icon={ value.fa_4 } /></i>{ value.title_4 }</h3>
            <p>{ value.body_4 }</p>
          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={ 'six columns feature-media ' + imagepos }
            >
            { media }
          </ScrollAnimation>
       </div>
     )
   })}
  </section>
)
