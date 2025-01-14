import {CORE_CONCEPTS} from './data.js'
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js'


// for study, below code is not working
// function MyComponent(priority){
//   return (
//     <p>Priority: {priority}</p>
//   );
// }
function App() {
  const [content,setContent] = useState('');

  function toggle(selectedButton){
    setContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* {CORE_CONCEPTS.map(coreConcept=>
              <CoreConcept 
              title={coreConcept.title} 
              description={coreConcept.description} 
              img={coreConcept.image}  />
            )} */}
            {CORE_CONCEPTS.map(coreConcept=>
              <CoreConcept key={coreConcept.title} {...coreConcept}
                />
            )}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=>toggle('components')} isSelected={content ==='components'} >Components</TabButton>
            <TabButton onClick={()=>toggle('jsx')} isSelected={content ==='jsx'}>JSX</TabButton>
            <TabButton onClick={()=>toggle('props')} isSelected={content ==='props'}> Props</TabButton>
            <TabButton onClick={()=>toggle('state')} isSelected={content ==='state'}>State</TabButton>
          </menu>
          {/* method 1 */}
          {/* {!content ? (<p>please select a topic.</p>):(
            <div>
              <h3>{EXAMPLES[content].title}</h3>
              <p>{EXAMPLES[content].description}</p>
              <pre>
                <code>{EXAMPLES[content].code}</code>
              </pre>
            </div>)} */}
          {/* method 2 */}
          {!content && (<p>please select a topic.</p>)}
          {content &&(
            <div>
              <h3>{EXAMPLES[content].title}</h3>
              <p>{EXAMPLES[content].description}</p>
              <pre>
                <code>{EXAMPLES[content].code}</code>
              </pre>
            </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
