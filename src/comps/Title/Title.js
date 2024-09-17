import React from 'react';
import styles from './Title.module.css'

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>Tyler's Dorm Food Adventures</h1>
      <div> My freshman year at Colorado College was right in the middle of a pandemic, and I found myself being stuck in my room most of the time. Thus, I found ample time to pick up the hobby of rating my dorm food. Here are most of the meals that I had during the 2021 spring semester. Clicking on the image will reveal a more detailed description as well as my rating and critique. </div>
      <br />
    </div>
  )
}

export default Title;
