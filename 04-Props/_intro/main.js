function MyComponent(props)  {
    console.log(props)
    return <h4>Hello {props.text}</h4>
}

function Button(props) {
    return <button className={`btn ${props.className}`}>{props.text}</button>
}


// ส่ง ARRTIBUTE ให้ ReactElement
// React : React.createElement ("h1",props, "Header")
// JSX : <h1 className="red", role="button">Header</h1>
// const props = {className:"red" role:"button"}

// ส่ง ATTRIBUTE ให้ FunctionComponent
// JSX : <MyComponent text="React" className="red" />
// const props = {text:"React", className:"red"}

// 0 param : <MyComponent /> === MyComponent()
// 1 attr : <MyComponent text="react /> === MyComponent()
// 2 attr : <MyComponent text="react className="red" /> === MyComponent()


// props : Object ที่เก็บ Key-value of Attributes ทั้งหมดของ function component

function App() {
    return(
      <div>
        <h1 className='red'>Header</h1>
        <MyComponent text="CSS"/>
        <MyComponent text="Java"/>
        <MyComponent text="JS"/>
        <Button text="cancel" className="red"/>
        <Button text="submit"/>
        <Button text="continue" className="white"/>
    </div>
    )
}



// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
