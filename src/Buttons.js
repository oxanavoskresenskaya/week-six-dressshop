function Buttons ({filterrdClothers}) {
    return (
        <div className="cont" >
          <button className="change" onClick={() => filterrdClothers('dress')}>Dresses</button>
          <button className="change" onClick={() => filterrdClothers('skirt')}>Skirts</button> 
          <button className="change" onClick={() => filterrdClothers('pants')}>Pants</button>
          <button className="change" onClick={() => filterrdClothers('shoes')}>Shoes</button>
          <button className="change" onClick={() => filterrdClothers('shirt')}>Shirts</button>               
        </div>
                ) 
    }
    export default Buttons;