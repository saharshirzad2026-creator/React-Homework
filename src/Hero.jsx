import Practice from "./Practice";

function Hero(props){
    return(
    <>
       <h1 className="text-red-600 text-center my-8 text-3xl font-bold">{props.text}</h1>
       <Practice/>
    </>
    );
}
export default Hero;