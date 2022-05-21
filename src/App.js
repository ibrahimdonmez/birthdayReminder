import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return(
    <main>
      <section className='container'>
        <h3> Bugün {people.length} kişinin doğum günü. </h3>  
        <List people = {people}/>
        <button onClick={() => setPeople([])}> Temizle </button>
      </section>  
    </main>
  );
}

export default App;
