import Headings from "../../components/headings/Headings";
import GetInTouchImg from "../../assets/get-in-touch.png";

export default function GetInTouchSection() {
  return (
    <section className="bg-[#FAF8F5] py-12 my-20">
      <Headings
        title="Get in touch"
        subtitle="We strive to respond to all inquiries within 24 hours. Your satisfaction is our priority."
      />

      <div className="lg:flex px-5 lg:px-0 justify-center items-center py-12">
        {/* Container for Image + Form */}
        <div className="lg:flex max-w-6xl w-full gap-16">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 mb-6 lg:mb-0 rounded-2xl overflow-hidden">
            <img
              src={GetInTouchImg}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form Card */}
          <div className="lg:w-1/2 bg-white p-10 flex flex-col justify-center rounded-2xl overflow-hidden">
            {/* Title */}
            <h2 className="text-3xl font-medium text-center mb-6 text-[#16181C]">
              Send Us a Message
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1 ">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full bg-[#FAF8F5] border border-gray-300 rounded-md px-4 py-3 
      focus:outline-none focus:ring-0"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 ">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-[#FAF8F5] border border-gray-300 rounded-md px-4 py-3 
      focus:outline-none focus:ring-0"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block mb-1 ">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) - 253 - 456"
                className="w-full bg-[#FAF8F5] border border-gray-300 rounded-md px-4 py-3 
      focus:outline-none focus:ring-0"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-1 ">Message</label>
              <textarea
                placeholder="Write your message"
                className="w-full bg-[#FAF8F5] border border-gray-300 rounded-md px-4 py-3 h-32 
      resize-none focus:outline-none focus:ring-0"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-[#2E513E] text-white py-3 rounded-md cursor-pointer">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
