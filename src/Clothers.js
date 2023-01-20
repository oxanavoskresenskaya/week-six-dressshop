function Clothers ({anyClothers}) {
return (
    <div className='products'>
        {anyClothers.map((el) => {
            const {id, name, searchTerm, price, image} = el;
            return (
                <div key={id} className='product-card'>
                    <h3>{id}-{name}</h3>
                    <h4>{price}</h4>
                    <img src={image} alt='clothers' width='400px' height='500px'/>
                </div>
            ) 
        })}
    </div>
)
}

export default Clothers;