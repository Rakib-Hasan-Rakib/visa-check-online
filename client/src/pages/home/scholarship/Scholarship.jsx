import Container from "../../../components/Container";
import "./scholarship.css";
import { motion } from "framer-motion";

const Scholarship = () => {
  return (
    <>
      <div className="scholarship_sect">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between  items-center gap-8 py-4 lg:py-8">
            <img
              src="https://i.ibb.co.com/h77K1xg/scholarship-left.png"
              alt="some students"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="text-white space-y-3 lg:space-y-6"
            >
              <h2 className="text-xl lg:text-3xl font-bold capitalize">
                20+ Best Universities Scholarship Programs From 20 Countries
              </h2>
              <p className="lg:text-lg">
                We also help with other family based employment based and
                investment based Immigration. Praesent eui vel aliquam nisl
                efficitur eu.
              </p>
              <div className="flex gap-2">
                <img
                  src="https://i.ibb.co.com/Jjnz4fF/s-3.png"
                  alt="flag"
                  className="w-16 lg:w-28 h-auto object-cover object-center"
                />
                <img
                  src="https://i.ibb.co.com/0h9KzZF/s-1.png"
                  alt="flag"
                  className="w-16 lg:w-28 h-auto object-cover object-center"
                />
                <img
                  src="https://i.ibb.co.com/ch2MJ6m/s-5.png"
                  alt="flag"
                  className="w-16 lg:w-28 h-auto object-cover object-center"
                />
                <img
                  src="https://i.ibb.co.com/QQxnTwG/s-2.png"
                  alt="flag"
                  className="w-16 lg:w-28 h-auto object-cover object-center"
                />
                <img
                  src="https://i.ibb.co.com/C906hkQ/s-4.png"
                  alt="flag"
                  className="w-16 lg:w-28 h-auto object-cover object-center"
                />
              </div>
              <p>Validity From : 20 sept 2024 - 25 Jan 2025</p>
              <button className="btn_one">Apply Now</button>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Scholarship;
