import About from "@/components/about/About";
import CarDetails from "@/components/car details/CarDetails";
import CarGallery from "@/components/car gallery/CarGallery";
import Specifications from "@/components/specifications/Specifications";
import Tesla from "@/data/tesla";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-6 tablet:mx-20 desktop:mx-24 overflow-x-hidden">
      <section className="flex flex-col items-center desktop:flex-row desktop:items-start my-16">
        <div className="w-full flex justify-center items-center dektop:mx-24">
          <CarGallery
            images={Tesla.images}
          />
        </div>
        <div className="ml-6 desktop:max-w-sm">
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
        <About
          features={Tesla.features}
        />
      </section>
      <section>
        <Specifications
           specifications={Tesla.specifications}
        />
      </section>
    </main>
  );
}
