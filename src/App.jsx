import { Header } from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


// for study, below code is not working
// function MyComponent(priority){
//   return (
//     <p>Priority: {priority}</p>
//   );
// }
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples />
      </main>
    </>
  );
}

export default App;
