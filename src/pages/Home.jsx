import { Show, createResource } from "solid-js";
import Card from "../components/Card";


const Home = () => {
    
    const fetchJoke = async() => {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming")
      return res.json();
    }
    
    const [jokes, jokesOptions] = createResource(fetchJoke);

    return (
    <div class="container" >
        <Show when={!jokes.loading} fallback={()=><div>Loading...</div>}>
            <Card jokes={jokes()} jokesOptions={jokesOptions} />
        </Show>
    </div>
  )
}

export default Home