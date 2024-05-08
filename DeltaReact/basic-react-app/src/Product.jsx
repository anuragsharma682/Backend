import './Product.css';
import Price from './Price';

function Product({title}){
    let oldPrice=["12,495","14352","54167","87567"];
    let newPrice=["13245","64678","86785","85746"]
    return (
        <div className="Product">
            <h4>{title}</h4>
            {/* <p>Title</p> */}
            <p>Description</p>
            <Price/>
        </div>
    );
}
export default Product;