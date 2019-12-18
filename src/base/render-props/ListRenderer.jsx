import React from 'react'

const EXAMPLE_DATA = [
  { done: true, content: 'I\'m a task' },
  { done: true, content: 'And I\'m the second one' },
  { done: false, content: 'The third here!' },
  { done: true, content: 'And a fourth one...' },
  { done: false, content: 'Well, with five is okay' },
  { done: true, content: 'But with six it\'s better' },
]

/* ReusableComponent is a dumb component that can be used for almost anything. */
const ReusableComponent = ({ type, children, ...props }) => (
  React.createElement(type, { ...props }, [...children])
)

const List = ({ render, data, showOnlyPending, ...props }) => (
  <ul {...props}>
    {
      showOnlyPending
      && data.map((item, index) => !item.done && render(item.content, index))
      || data.map((item, index) => render(item.content, index))
    }
  </ul>
)

class ListRenderer extends React.Component {
  state = {
    filterByPending: false,
  }
  render() {
    // const { dataToRenderIntoAList } = this.props;
    const { filterByPending } = this.state;
    return (
      <React.Fragment>
        <div className="filter">
          <div onClick={() => this.setState({ filterByPending: false })}>Show All</div>
          <div onClick={() => this.setState({ filterByPending: true })}>Show only pending</div>
        </div>
        <List
          className="list"
          showOnlyPending={filterByPending}
          data={EXAMPLE_DATA}
          render={(context, key) => {
            <ReusableComponent
              className="list-item"
              type="li"
              key={key}
            >
              {context}
            </ReusableComponent>

          }}
        />
      </React.Fragment>
    )
  }
}

export default ListRenderer
