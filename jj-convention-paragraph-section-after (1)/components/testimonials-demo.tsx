import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The grand ballroom at JJ Convention made our wedding feel like a royal fairytale. The 3D projection mapping and custom lighting systems were absolutely breathtaking!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    name: "Priya Sharma",
    role: "Bride",
  },
  {
    text: "As an event planner, I've worked across many premium venues in India, but the luxury hospitality and modern tech integration at JJ Convention are truly world-class.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Rahul Mehta",
    role: "Lead Luxury Event Planner",
  },
  {
    text: "Our annual corporate gala was flawless. The culinary options, spatial acoustic systems, and seamless valet parking received rave reviews from our board members.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    name: "Vikram Aditya",
    role: "Director, TechCorp India",
  },
  {
    text: "The open-air manicured lawns under the evening stars made our engagement ceremony unforgettable. Highly recommend JJ Convention for luxury celebrations!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    name: "Ananya Rao",
    role: "Client & Host",
  },
  {
    text: "Hosting our product launch here was a massive success. The giant LED screens, immersive audio, and ultra-reliable networking made our production incredibly smooth.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    name: "Siddharth Sen",
    role: "Creative Director, EventSync",
  },
  {
    text: "The attention to detail in the pre-function halls, bridal suites, and VIP lounges is pristine. It is the perfect venue for high-end celebrity gatherings.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop",
    name: "Kavitha Reddy",
    role: "Luxury Event Coordinator",
  },
  {
    text: "From the exquisite catering options to the highly professional concierge staff, everything was designed with pure luxury in mind. Our family was delighted.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    name: "Meera & Rajesh",
    role: "Family Hosts",
  },
  {
    text: "Absolutely world-class acoustics and ambient design. The team adapted the layout perfectly for our classical music concert, ensuring rich, warm resonance.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    name: "Srinivas Rao",
    role: "Cultural Program Director",
  },
  {
    text: "A modern architectural masterpiece in Hyderabad. The perfect blend of traditional grandeur, premium materials, and cutting-edge digital experiences.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    name: "Aarav Kapoor",
    role: "Premium Host & Architect",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-[#F8F5EE] py-[8rem] relative overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto px-[2.4rem] z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[4.8rem] items-center">
          
          {/* Left Block: Modern, Left-Aligned Sticky Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-[480px]">
            <h2 className="text-[3.6rem] sm:text-[4.2rem] md:text-[4.8rem] font-normal leading-[1.15] tracking-[0.02em] mb-[2rem]" style={{ fontFamily: "'TAN-TWINKLE', 'Tan Twinkle', 'Cinzel Decorative', 'Italiana', 'Cormorant Garamond', 'Playfair Display', serif", color: '#1C1C1C' }}>
              What our <br />users say
            </h2>
          </div>

          {/* Right Block: Scrolling Testimonial Columns */}
          <div className="lg:col-span-7 flex justify-center gap-[3.2rem] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[760px] overflow-hidden relative">
            <TestimonialsColumn testimonials={firstColumn} duration={16} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={21} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block" duration={18} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
