import './App.css';
import React from 'react'
import SideBar from './SideBar';

function App() {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * 100 + 1)),
      2500
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App-wrapper">
      <header className="App-header">
        {/* <button>Toggle</button> */}
        <SideBar className="sideBar" />
        {/* <div className="sideBar"> SideBar</div> */}
      </header>
      <div className="main">
      <div className="Number">
        <div>
          <label>{number}</label>
        </div>
        <div>
          <button>Rand</button>
          <button>Stop</button>
        </div>
        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros. 
        
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros.</article>
    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros. 
        
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros.</article>
    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros. 
        
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vestibulum augue. Pellentesque suscipit tellus quis dapibus fermentum. Sed risus lectus, mollis quis orci vitae, mattis consequat sapien. Sed vitae cursus nisi. Suspendisse cursus felis nec felis ornare, sit amet ullamcorper diam dictum. Fusce feugiat pellentesque lorem, at eleifend tellus rutrum sit amet. Vestibulum id neque est. Duis interdum nunc nec lobortis rutrum. Sed ut tincidunt turpis, et adipiscing urna. Nam sit amet tellus et elit fringilla tempus ut vitae erat. Integer eu placerat magna, non ornare felis. Aenean eu dapibus leo. Cras dui nisi, volutpat in pretium vitae, ultrices a dui. Nullam consequat feugiat purus non vehicula. Aenean lacinia, mi non euismod malesuada, lorem dolor scelerisque velit, sed consequat ante leo quis nisl.
    
    Etiam vel lacus dolor. Quisque at fringilla eros. Vivamus eget turpis sem. Praesent vel hendrerit ante. In hac habitasse platea dictumst. Integer scelerisque diam ut justo feugiat, quis porttitor felis imperdiet. Mauris at ullamcorper sem. In hac habitasse platea dictumst. Vivamus ultrices leo vitae lacinia vulputate. Vestibulum orci ligula, imperdiet non luctus eget, luctus eu nisl. Maecenas mollis eleifend sollicitudin. Praesent dictum tristique ipsum, quis imperdiet quam. Praesent euismod velit sed ipsum posuere vulputate. Praesent placerat ipsum sed neque viverra, sed adipiscing tortor pulvinar. Phasellus blandit sit amet ligula quis ultrices.
    
    Integer tempus risus sit amet aliquam lacinia. Phasellus nec nibh vitae odio tristique commodo. Proin mollis iaculis sapien, a vestibulum odio tincidunt facilisis. Vestibulum sed nibh ornare, mattis ligula quis, porttitor magna. Duis interdum mattis mauris, vel molestie massa porta sit amet. Maecenas vel urna et nisl sodales volutpat non sed urna. Nam dui tortor, semper sed dictum non, congue quis leo. Aenean vitae mi bibendum, sollicitudin sem et, laoreet massa. Nulla ornare augue velit, non placerat nulla pretium et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum neque, ac ultrices sapien. Etiam lacinia libero vitae dolor ullamcorper laoreet. Phasellus at auctor leo. Sed blandit urna non justo ornare blandit. In sagittis tortor viverra iaculis scelerisque. Praesent fringilla sed orci quis varius.
    
    Aliquam nec erat non ligula congue ullamcorper id sed massa. Maecenas eget ligula vel dolor suscipit elementum sed a orci. Quisque accumsan mollis lobortis. Vestibulum a lacus viverra, bibendum lacus a, dapibus nulla. Donec laoreet libero ac ante vehicula ultricies. Aenean sollicitudin gravida libero eu tempus. Sed dapibus, felis et consequat aliquet, ante nisl venenatis eros, vitae consequat neque mauris vitae justo. Vestibulum pharetra lacus in est ultricies, bibendum rutrum nisi pulvinar. Mauris ac imperdiet eros, nec convallis velit. Nulla dictum velit eget volutpat suscipit. Aenean eget arcu at ligula convallis rhoncus. Proin ut volutpat leo, nec fringilla erat. Nam pulvinar mattis erat et euismod. Fusce nisl nunc, ultricies ac nulla et, fermentum consequat tellus. Aenean id orci eros.</article>
      </div>
      <footer className="footer">
        <div>
          Task project 2021 by Rudyi
        </div>
      </footer>
      </div>
    </div>)
};
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

export default App;
