Context provides a way to pass data through the component tree without having to pass down manually at every level

Context is designed to share data that can be consider(认为) "global" for a tree of React components

Context is primarily used when some datas needs to be accessible by many components at different nesting levels


API
> React.createContext(defaultValue)
When React renders a component that subscribes to this Context object it will read the current context value from the closest matching `Provider` above it in the tree

The `defaultValue` argument is only used when a component does not have a matching Provider above it in the tree

> Context.Provider
``` js
<MyContext.Provider value={/* someValue */} />
```
Every Context object comes with a Provider React component that allows consuming components to subscribe to context change

Accept a `value` prop to be **passed to consuming components** that are descendants(后裔) of this Provider.
One Provider can be connected to many consumers.
Provider can be nested to (嵌套到) override values deeper within the tree
> 多个Provider也可以嵌套使用，里层的会覆盖外层的数据

All customers that are descendants of a Provider will re-render whenever the Provider's `value` props changes

> Context.Customer
``` js
<MyContext.Consumer>
  { value }
</MyContext.Consumer>
```

A React component that subscribes to context changes.
This lets you subscribe to a context with in a function component

Required a function as a child.
The function reveives the current context values and returns a React node.
The `value` argument passed to the function will be equal to the `value` prop of the closest Provider for this context above in the tree.

If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

