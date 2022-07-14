import React from 'react'
import styles from "../styles/Divider.module.scss";

function Divider({top,height}) {
  return (
    <div className={styles.divider} style={{top:top,height:height}}>
      
    </div>
  )
}

export default Divider
