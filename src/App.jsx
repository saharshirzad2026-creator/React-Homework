import Hero from "./Hero";

function App(){
  let name = "Rahim";
  let lastName = "Qurbani";
  let age = 30;
  return(
    <div>
    <h2>
      Hello my name is {name} {lastName} and I am {age} years old
      </h2>
      <Hero name="Shahnaz"/>
      <Hero name="Sharif"/>
      <Hero name="Shahin"/>
      <Hero name="Shabnam"/>
    </div>
  );
}
export default App;