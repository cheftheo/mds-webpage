import './App.css';
import background from ".//resources/bg.png";
import logo from ".//resources/mds-logo.png";


const discordLink = "https://discord.gg/madnessro";
const shopLink = "https://shop.madness-rp.ro";
const rulesLink = "https://rules.madness-rp.ro";

function App() {
  var preventDragHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <img src={background} alt="" />

      <header>
        <img src={logo} alt="" onDragStart={preventDragHandler} />
        <button>Main</button>
        <button onClick={()=> window.open(shopLink, "_blank")}>Store</button>
        <button onClick={()=> window.open(rulesLink, "_blank")}>Rules</button>
        <button onClick={()=> window.open(discordLink, "_blank")}>discord</button>
      </header>

      <section>
        <h1><p className='sec-text'>A TWISTED WORLD</p></h1>
        <h1>MADNESS ROMANIA</h1>
        <h1>JOIN ON OUR <a href={discordLink} class = "purple-text-disc">DISCORD</a></h1>
        <h2>
          MADNESS ROMANIA ESTE UN SERVER PRIVAT DE FIVEM, CARE SE BAZEAZA PE UN CONCEPT DE ROLEPLAY. 
        </h2>
      </section>
    </div>
  );
}

export default App;
