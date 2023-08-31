// ให้สร้างตัวแปร Array เก็บชื่อเพื่อน
// นำ Array ชื่อเพื่อนมา Render ใน list แล้วแสดงบนหน้า UI


const friends = ['Bee', 'Pawinee', 'bibi'];
function List(props) {
    return (
        <div>
            <h1>{props.alt}</h1>
        </div>
    )
}


function App() {
    return (
        <div>
            {friends.map ((name) => 
            <List alt={name} />
        )}
        </div>
    )
}



const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);