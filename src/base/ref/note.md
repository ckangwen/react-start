When to use react use Refs
- Managing focus, text selection, or media playback
- Triggering imperative animation
- Integration thrid-party DOM libraries

create refs: `this.myRef = Reacr.createRef()`

pass the ref to an element
`<input ref={this.myRef} />`, the a reference to the node becomes accessible at the `current` attribute of the ref

access refs: `this.myRef.current`

React will assign the `current` property with the DOM element when the component mounted
and assign it back to null when it unmounts
`ref` updates happen before `componentDidMount` or `componentDidUpdate` lifecycle methods


Callback Refs

The function reveives the React component instance or HTML DOM element as its argument, which can be stored and accesed elsewhere