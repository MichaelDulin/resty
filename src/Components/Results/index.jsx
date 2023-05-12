import './Results.scss';
import JsonView from 'react18-json-view';

function Results ({data}){
  return (
    <section>
      <pre data-testid="results"><JsonView src={data} /></pre>
    </section>
  );
}

export default Results;