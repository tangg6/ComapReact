import React from 'react'
import {styles} from './GlobalStyle'

function Home() {
    return (
      <div className='container' style={styles.container}>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>

      </div>
    );
  }

export default Home;