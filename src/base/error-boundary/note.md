Error boundaries are **React components** that **catch javascript errors anywhere in their child component tree**, log those errors, and **display a fallback UI** instead of the component tree that crashed


Error boundaries catch errors for:
1. during rendering
2. during lifecycle methods
3. in construtors of the whole tree blow them

Error boundaries do not catch errors for:
1. Event handlers
2. Asynchronous code
3. Server side rendering
4. Errors thrown in the error boundary self (rather than its children)


A class component becomes an error boundary if it defines either of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch()`

Use `static getDerivedStateFromError()` to render a fallback UI after an error has been thrown
Use `componentDidCatch()` to log error infomation