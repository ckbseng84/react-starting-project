import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";
export default function CoreConcepts(){
    return (
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
    );
}