import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import content from "../../content/features.yaml"
// import downloadFile from "../../static/files/Shisha Delivery TR_Instructions.pdf"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => (


  <section id='features'>
    {content.map((value, index) => {

      let pos, imagepos
      if (index % 2 === 0) {
        pos = "right"
        imagepos = "left"
      } else {
        pos = "left"
        imagepos = "right"
      }

      let media
      if (value.image) {
        media = (<img src={value.image} alt="" />)
      } else if (value.video) {
        media = (
          <div>

            <iframe
              className="video-embeded"
              title={value.videoTitle}
              src={value.video}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen">

            </iframe>



          </div>
        )
      }
      library.add(fas)
      return (

        <div className={'row feature ' + value.name}>
          <div className={'six columns ' + pos}>
            <h1 className="heading-features">{value.heading}</h1>
            {value.lists.map((list, index) =>
              <div>
                <h3><i className="fa-icon"><FontAwesomeIcon icon={list.fa} /></i>{list.title}</h3>
                <p>{list.body}</p>
                <p
                  dangerouslySetInnerHTML={{ __html: list.pdf }}
                />
              </div>
            )}

          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={'six columns feature-media ' + imagepos}
          >
            {media}
          </ScrollAnimation>
        </div>
      )
    })}
  </section>
)
