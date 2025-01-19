import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples(){
  const [content,setContent] = useState('');
  function toggle(selectedButton){
    setContent(selectedButton);
  }
    return (
        <Section id='examples' title='Examples'>
          <Tabs
            //ButtonContainer="menu" // optional by using default value
            buttons={
            <>
              <TabButton onClick={()=>toggle('components')} isSelected={content ==='components'} >Components</TabButton>
              <TabButton onClick={()=>toggle('jsx')} isSelected={content ==='jsx'}>JSX</TabButton>
              <TabButton onClick={()=>toggle('props')} isSelected={content ==='props'}> Props</TabButton>
              <TabButton onClick={()=>toggle('state')} isSelected={content ==='state'}>State</TabButton>
            </>
          }>
           {!content && (<p>please select a topic.</p>)}
          {content &&(
            <div>
              <h3>{EXAMPLES[content].title}</h3>
              <p>{EXAMPLES[content].description}</p>
              <pre>
                <code>{EXAMPLES[content].code}</code>
              </pre>
            </div>)}
          </Tabs>
        
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
          
        </Section>
    );
}