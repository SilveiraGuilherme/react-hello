//Example on how to use props
export default function Test(props) {
  console.log(props);
  return <div>Test</div>;
}

// import Test from './components/Test';

/* <Test
    name="Guilherme"
    age={32}
    visible
    data={{ a: 'Teacher', b: 'Developer' }}
    onClick={() => {
      console.log('click');
    }}/>
*/
