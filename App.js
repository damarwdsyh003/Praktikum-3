import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <Link to="/">Beranda</Link> |
        <Link to="tentangsaya">TentangSaya</Link> |
        <Link to="karya">Karya</Link> |
        <Link to="kontak">Kontak</Link> |
        <p><Utama /></p>
      </div>
    )
  }
}

export default App;
