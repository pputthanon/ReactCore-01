// สร้าง Component ที่ชื่อว่า SearchBar ตาม figma

// #1 Write Your Function Component

function SearchBar() {
    return(
        <div className='searchbar'>
            <form>
                <fieldset>
                    <input type='text'/>
                    <button type="submit"> 
                        <img src='https://i.ibb.co/8Bych3q/icons8-search-120.png' />
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<SearchBar />);
