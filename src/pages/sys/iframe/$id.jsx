import React from 'react'
import { Skeleton } from 'antd'
import styles from './$id.less'

class IframePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  render () {
    const { location } = this.props
    const menuData = location.state
    return (
      <div className={styles.content}>
        <div className={styles.skeleton} style={{ display: this.state.loading ? 'block' : 'none' }}>
          <Skeleton loading={this.state.loading} active />
          <Skeleton loading={this.state.loading} avatar={{ size: 'large' }} active />
          <Skeleton loading={this.state.loading} active />
        </div>
        <iframe
          className={styles.iframe}
          name={menuData.Name}
          src={menuData.URI}
          onLoad={e => {
            this.setState({
              loading: false
            })
          }}
          frameBorder={0}
          width='100%'
          height={this.state.height}
          style={{
            display: this.state.loading ? 'none' : 'block'
          }}
        />
      </div>
    )
  }
}

export default IframePage
