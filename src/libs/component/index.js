import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Component extends React.Component {
  classNames(...args) {
    return classnames(args)
  }

  className(...args) {
    const { className } = this.props
    return this.classNames.apply(this, args.concat([className]))
  }

  style(args) {
    const { style } = this.props
    return { ...args, ...style }
  }
}

Component.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
