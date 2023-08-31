// สร้าง Component ที่ชื่อว่า GetInTouch

function GetInTouch() {
    return (
        <div>
            <h1>Get In Touch With Us</h1>
            <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
    )
}



function App() {
    return (
        <GetInTouch />
    )
}

// #1 Write Your Function Component

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
