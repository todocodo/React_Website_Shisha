/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Shisha Delivery Guildford`,
    author: {
      name: `Todor Ranchev`,
    },
    description: `This website consist of an information about the Shisha Delivery Guildford.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `pricing`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Features'},
      {path: 'pricing', label: 'Pricing'},
      {path: 'call-to-action', label: 'Flavours'},
      {path: 'screenshots', label: 'Gallery'},
      {path: 'subscribe', label: 'Order'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.instagram.com/shisha.delivery.guildford`,
        fa: `facebook` },
      { service: `Instagram`,
        url : `https://www.instagram.com/shisha.delivery.guildford`,
        fa: `instagram` },
      { service: `Youtube`,
        url : `https://www.youtube.com/channel/UCv5Z0oIfjJYSFjm7MBSMAoA`,
        fa: `youtube` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `logo_shisha_only_noback.png`,
    logo: `/images/logo_shisha_only_white_noback.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo_black_white.png`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `07564545608`, url: `tel:07564545608` },
      { text: `shishadeliverytr@gmail.com`, url: `mailto:shishadeliverytr@gmail.com`},
    ],
  },
  plugins: [ 
    `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` 
  ],
}
