import Container from "../../../components/Container";
import Card from "./Card";

// const featuredArray = ["business", "student", "work & job", "turist & visitor"];
const featuredArray = [
  { image: "https://i.ibb.co.com/5xK2Czz/featurs-1.jpg", title: "business" },
  { image: "https://i.ibb.co.com/tZDfbcV/featurs-2.jpg", title: "student" },
  { image: "https://i.ibb.co.com/X5Rvzd8/featurs-3.jpg", title: "work & job" },
  {
    image: "https://i.ibb.co.com/1MNL4cG/featurs-4.jpg",
    title: "turist & visitor",
  },
];

const Featured = () => {
  return (
    <>
      <Container>
        <div className="my-20 lg:my-40">
          <h1 className="section_title mb-12 lg:mb-20">
            We Provide Visa & Immigration Service From Experienced Lawyers
          </h1>

          <div className="grid md:gird-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {featuredArray?.map((data, i) => {
              return <Card key={i} image={data?.image} title={data?.title} index={i} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Featured;
