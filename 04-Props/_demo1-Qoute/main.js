const quotes = [
    {
        quote: 'The only sin is ignorance',
        source: 'Christopher Marlowe',
    },
    {
        quote: 'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
        source: 'Demosthenes',
    },
    {
        quote: 'A lie can travel halfway around the world while the truth is putting on its shoes',
        source: 'Mark Twain',
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
        source: 'Eleanor Roosevelt',
    },
    {
        quote: 'If you have a garden and a library, you have everything you need',
        source: 'Marcus Tullius Cicero',
    },
    {
        quote: 'Truth comes out in wine',
        source: 'Pliny the Elder',
    },
    {
        quote: 'Everything in the universe is within you. Ask all from yourself',
        source: 'Rumi',
    },
    {
        quote: 'When I get a little money I buy books; and if any is left I buy food and clothes',
        source: 'Desiderius Erasmus',
    },
];

// function Card(props) {
//     return (
//         <div className = 'card'>
//             <h4>Quote : {props.quote}</h4>
//             <p>Author : {props.author}</p>
//         </div>
  
//     )
// }


// const quoteObj = {
//     quote: 'The only sin is ignorance',
//     source: 'Christopher Marlowe',
// }


// function App() {
//     return (
//     <div className='container'>
//         <div className = 'card'>
//             <h4>Quote : {quoteObj.quote}</h4>
//             <p>Author : {quoteObj.source}</p>
//         </div>
//         <Card quote="lalala" author="bee"/>
//         <Card quote={quoteObj.quote} author={quoteObj.source}/>
//         <Card />
//     </div>
//     )
// }


function Card(props) {
    return (
        <div className = 'card'>
            <div className='quote'>
                <h4>Quote : {props.quote}</h4>
            </div>
            <div className='author'>
                <p>Author : {props.author}</p>
            </div>
        </div>
  
    )
}


function App() {
    return(
        <div>
            {quotes.map ((obj) => 
            <Card
            quote={obj.quote}
            author={obj.source}
            />)}
        </div>
    )
}


// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
