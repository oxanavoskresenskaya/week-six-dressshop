import { useState } from 'react';
import { data } from './data';
import Clothers from './Clothers';
import Buttons from './Buttons';
function Home () {
    const [clothers, setClothers] = useState (data);
    const chosenClothers = (searchTerm) => {
    const newClothes = data.filter (el => el.searchTerm === searchTerm);
    setClothers(newClothes);
  };
  return (
    <div>
      <div className='cont'>
        <h1 className='back' >Free Standard Shipping</h1>
      </div>
      <Buttons filterrdClothers={chosenClothers}/>
      <Clothers anyClothers={clothers}/>
    </div>
  );
}
export default Home;