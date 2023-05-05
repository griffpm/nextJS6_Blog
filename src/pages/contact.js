import Layout from '@/components/layout/Layout'
import React from 'react'

export default function contact() {
  return (
    <Layout>
      <div id='contactpage'>
        <div id='contact_content'>
          <h2>Contact Information</h2>
          <div id='contact_info'>
            <p>Adress: 198 west 21th treer, Suite 721 New York NY 10016</p>
            <p>Phone: <span>+ 1235 2355 98</span></p>
            <p>Email: <span>info@yoursite.com</span></p>
            <p>Website: <span>yoursite.com</span></p>
          </div>
          <div id='contact3'>
            <div id='contact_form'>
              <form>
                <div>
                  <input type="text" placeholder='Your Name' />
                </div>
                <div>
                  <input type="email" name="email" id="email" placeholder='You Email' />  
                </div>
                <div>
                  <input type="text" placeholder='Subjet of your Message' />
                </div>
                <div>
                  <textarea name="" id="" placeholder='Message'></textarea>
                </div>
                <div>
                  <button>Send Message</button>
                </div>
              </form>
            </div>
            <div id='contact_map'>
              <img src="/img/map.jpg" alt="google map" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
