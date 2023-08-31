function Car(props) {
    console.log(props.brand); // 'Honda'
    console.log(props.price); // 1_000_000
    console.log(props.color); // undefined
    return <div>Car</div>;
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<Car brand='Honda' price='1000000' />);
