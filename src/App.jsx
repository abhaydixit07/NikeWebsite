import { 
  Hero, 
  CustomerReviews, 
  Footer, 
  Services, 
  SuperQuality, 
  Subscribe, 
  SpecialOffers, 
  PopularProducts 
} from './sections/index.js';
import Nav from './components/Nav'; 

function App(){
  return (
    <main className="relative">
      Navef
      <section className="x1:padding-1 wide:padding-r padding-b">
        Hero
      </section>

      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}
export default App;