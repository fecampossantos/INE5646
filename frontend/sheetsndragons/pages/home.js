import Home from "../components/Home";

export default Home;

export async function getStaticProps(){
  let user = {
    name:"Felipe",
    
  }

  return{ props: {
    user: user
  }}
}