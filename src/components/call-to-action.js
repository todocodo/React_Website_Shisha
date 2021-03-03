import React from "react"
import content from "../../content/call-to-action.yaml"


export default () => (

  <section id="call-to-action">
    <h1>{content.title}</h1>
    <div className="row text-center">
      <div className="cards_wrap">
        {content.cards.map((card, index) =>
          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">
                <img className="img_card" src={card.img} alt="flavour" />
              </div>
              <div className="card_bottom">
                <div className="card_category">
                  {card.title}
                  </div>
                <div className="card_info">
                  <p className="card_flavour">{ card.flavour }</p>
                  <p className="card_flavour_info">{ card.info }</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>

)