// สร้าง Component ที่ชื่อว่า Navbar ตามรูปภาพ

// #1 Write Your Function Component

function Navbar() {
    return(
        <div className='nav_menu'>
            <ul className='menu_list'>
                <li className='nav_menu_item'>
                    Home
                </li>
                <li className='nav_menu_item'>
                    Shop
                </li>
                <li className='nav_menu_item'>
                    About
                </li>
                <li className='nav_menu_item'>
                    Contact
                </li>
            </ul>
        </div>
    )
}

function App() {
    return(
        <Navbar />
    )
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
