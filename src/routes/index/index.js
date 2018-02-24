import React from 'react'
import { Spin } from 'antd'
import { styles } from '../../components/Layout'

const IndexSpin = () => (
  <div>
    <Spin size="large" className={styles.globalSpin} />
  </div>)

export default IndexSpin
