import About from "@/components/about/About";
import CarDetails from "@/components/car details/CarDetails";
import CarGallery from "@/components/car gallery/CarGallery";
import Tesla from "@/data/tesla";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-4 desktop:mx-24">
      <section className="flex flex-col desktop:flex-row items-center tablet:items-start my-16">
        <div className="w-full flex justify-center items-center dektop:mx-24">
          <CarGallery
            images={Tesla.images}
          />
        </div>
        <div className="w-full tablet:max-w-sm">
          <CarDetails
            state={Tesla.state}
            title={Tesla.title}
            vin={Tesla.vin}
            rating={Tesla.rating}
            price={Tesla.price}
            estimatedDelivery={Tesla.estimatedDelivery}
            colours={Tesla.colours}
            companyDescription={Tesla.companyDescription}
            companyLink={Tesla.companyLink}
          />
        </div>
      </section>
      <section>
        <About/>
      </section>
    </main>
  );
}
