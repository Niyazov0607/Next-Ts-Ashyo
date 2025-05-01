import Cards from "@/components/Cards/Cards";
import BannerCate from "@/modules/BannerCate/BannerCate";
import Brands from "@/modules/Brands/Brands";
import CategoryBrand from "@/modules/CategoryBrand";
import Hero from "@/modules/Hero/Hero";

export default function Home() {
    return (
        <div>
            <Hero />
            <Brands />
            <Cards title="Most popular products" api="/products" />
            <Cards title="The cheapest products" api="/products" />
            <Cards title="Most purchased products" api="/products" />
            <CategoryBrand />
            <Cards title="Discount products" api="/products" />
            <BannerCate />
            <Cards title="The last view products" api="/products" />
        </div>
    );
}
