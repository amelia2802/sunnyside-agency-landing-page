import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Wrapper from "./components/Wrapper"
import data from "./data"
import Testimonal from "./components/Testimonal"
import Footer from "./components/Footer"
import './App.css';

function App() {
  const testimonalItem = data.map(item => {
    return(
      <Testimonal 
        key={item.id}
        item={item}
      />
    )
    }
  )
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Wrapper />
      <h3 className="testimonals-title">Client testimonials</h3>
      <section className="feeds">
        {testimonalItem}
      </section>
      <Footer />
    </div>
  );
}

export default App;
