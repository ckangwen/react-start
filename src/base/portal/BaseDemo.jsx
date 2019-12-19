/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'

const portalRoot = document.getElementById('portal')

class Protal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.el)
  }

}

class Modal extends React.Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <Protal>
        {
          on ?
            (
              <div className="modal isactive">
                <div className="modal-background"></div>
                <div className="modal-content">
                  <div className="box">
                    <div className="subtitle">{children}</div>
                    <button onClick={toggle} className="closeButton button is-info">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )
            : null
        }
      </Protal>
    )
  }
}

export class BaseDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const { showModal } = this.state
    return (
      <div>
        <div className="box">
          <h1 className="subtitle">Hello, I am the parent!</h1>
          <button onClick={this.toggleModal} className="button is-black">
            Toggle Modal
        </button>
          <Modal on={showModal} toggle={this.toggleModal}>
            {showModal ? <h1>Hello, I am the portal!</h1> : null}
          </Modal>
        </div>
      </div>
    );
  }
}

/**
 * 将子节点渲染到父组件之外的DOM节点
 * return ReactDOM.createPortal(children, container)
 * 将children节点渲染到container节点
 */