interface ButtonProps {

  title: string;

}

function Button(props: ButtonProps ) {
  return <button>{props.title}</button>
};

function App() {

  return(
    <>
    <h1>BUAHAHAHAHAHAHAH</h1>
    <Button title="Me clica por favor"/>
    <Button title="Não!!! Clica neu"/>
    </>
    )
}

export default App
