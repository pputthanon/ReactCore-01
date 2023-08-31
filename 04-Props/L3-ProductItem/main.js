// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้ 

function Product(props) {
    return (
    <div>
        <h1>Iphone 15</h1>
        <h2>{props.price}</h2>
        <p>{props.description}</p>
    </div>
    )
}



function ProductItem() {
    return (
       <div>
            <Product price='30_000' description="This is the newest Iphone" />
       </div>
    )
}



const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<ProductItem />)
