import Feature from "./Feature";

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-8 px-8">
      <Feature
        title="Feature 1"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe at non, ad facere nihil rem magnam debitis neque quasi necessitatibus similique quia quis quam amet qui expedita, maxime molestiae?
Excepturi debitis quos dolorum provident delectus aspernatur voluptatibus unde error. Ipsum quidem accusamus, perspiciatis sequi ab asperiores molestiae ipsam provident rerum, optio consequatur ea? Sunt minus hic non temporibus doloribus."
      />

      <Feature
        title="Feature 2"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe at non, ad facere nihil rem magnam debitis neque quasi necessitatibus similique quia quis quam amet qui expedita, maxime molestiae?
Excepturi debitis quos dolorum provident delectus aspernatur voluptatibus unde error. Ipsum quidem accusamus, perspiciatis sequi ab asperiores molestiae ipsam provident rerum, optio consequatur ea? Sunt minus hic non temporibus doloribus."
      />

      <Feature
        title="Feature 3"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe at non, ad facere nihil rem magnam debitis neque quasi necessitatibus similique quia quis quam amet qui expedita, maxime molestiae?
Excepturi debitis quos dolorum provident delectus aspernatur voluptatibus unde error. Ipsum quidem accusamus, perspiciatis sequi ab asperiores molestiae ipsam provident rerum, optio consequatur ea? Sunt minus hic non temporibus doloribus."
      />
    </div>
  );
}
