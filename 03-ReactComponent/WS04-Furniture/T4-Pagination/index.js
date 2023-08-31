// #1 Write Your Function Component

function Pagination() {
    return (
        <div className='div_pagination'>
            <div className='number1'>1</div>
            <div className='number'>2</div>
            <div className='number'>3</div>
            <div className='next'>Next</div>
        </div>
    )
}


// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Pagination />);
