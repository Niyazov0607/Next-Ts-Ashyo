import Cards from "@/components/Cards/Cards";
import Brands from "@/modules/Brands/Brands";
import CategoryBrand from "@/modules/CategoryBrand";
import Hero from "@/modules/Hero/Hero";

export default function Home() {
    return (
        <div>
            <Hero />
            <Brands />
            <Cards />
            <Cards />
            <Cards />
            <CategoryBrand />
        </div>
    );
}
