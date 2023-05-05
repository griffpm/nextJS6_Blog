import CardClient from '@/components/CardClient'
import Layout from '@/components/layout/Layout'
import React from 'react'

export default function About() {
  return (
    <Layout>
      <div id='aboutpage'>
        <div id='about_content'>
          <div id='presentation_content'>
            <div id='presentation_img'>
              <img src='/img/about.jpg' alt='' />
            </div>
            <div id='presentation_text'>
              <h3>Welcome to Readit</h3>
              <h2>We give you the best articles you want</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              <div id='card_onglet'>
                <div id='onglets'>
                  <p>Our Mission</p>
                  <p>Our Vision</p>
                  <p>Our Value</p>
                </div>
                <div id='onglette'>
                  <p>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
          </div>
          <div id='commentaires' className='mt-8 mb-8'>
            <h3 className='flex justify-center'>Testimonial</h3>
            <h2 className='flex justify-center'>Happy Clients</h2>
            <div id='cards_clients'>
              <div id='card1'>
              <CardClient nom="Roger Scott" job="Marketing Manager" img="img/person_1.jpg" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
              </div>

              <div id='card2'>
                <CardClient nom="Roger Scott" job="Marketing Manager" img="img/person_2.jpg" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
              </div>

              <div id='card3'>
                <CardClient nom="Roger Scott" job="Marketing Manager" img="img/person_3.jpg" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
