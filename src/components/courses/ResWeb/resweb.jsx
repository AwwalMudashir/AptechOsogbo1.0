import React from 'react';
import './resweb.css';

const ResponsiveWebDevelopment = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="res-hero relative bg-[#A60000] h-[100vh] text-white py-20 lg:py-32 px-4 lg:px-0 flex items-center justify-center">
  <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
    <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Responsive Web Development</h1>
    <p className="text-lg lg:text-xl font-light leading-relaxed max-w-[800px]">
      Master the art of building responsive websites with Aptech. Learn industry-relevant technologies and frameworks to create web pages that adapt seamlessly across all devices, ensuring a smooth user experience.
    </p>
  </div>
</section>


      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-[#FFB900] text-center scroll-element">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-[#A60000]">Technologies You’ll Learn</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="tech-item p-6 bg-white shadow-lg rounded-lg">
              <img src="/html5.png" alt="HTML5" className="mx-auto mb-4 w-[150px] h-[150px]" />
              <h3 className="text-2xl font-bold mb-2 text-[#A60000]">HTML5</h3>
              <p className="text-black text-lg">Structure the web with the latest HTML standards for responsive and accessible designs.</p>
            </div>
            <div className="tech-item p-6 bg-white shadow-lg rounded-lg">
              <img src="/css3.png" alt="CSS3" className="mx-auto mb-4 w-[150px] h-[150px]" />
              <h3 className="text-2xl font-bold mb-2 text-[#A60000]">CSS3</h3>
              <p className="text-black text-lg">Style responsive layouts using modern CSS3 techniques like Flexbox and Grid.</p>
            </div>
            <div className="tech-item p-6 bg-white shadow-lg rounded-lg">
              <img src="/js.png" alt="JavaScript" className="mx-auto mb-4 w-[150px] h-[150px]" />
              <h3 className="text-2xl font-bold mb-2 text-[#A60000]">JavaScript</h3>
              <p className="text-black text-lg">Build dynamic and interactive web applications using core JavaScript concepts.</p>
            </div>
            <div className="tech-item p-6 bg-white shadow-lg rounded-lg">
              <img src="/react.png" alt="ReactJS" className="mx-auto mb-4 w-[150px] h-[150px]" />
              <h3 className="text-2xl font-bold mb-2 text-[#A60000]">ReactJS</h3>
              <p className="text-black text-lg">Master modern frontend development with ReactJS to create fast, scalable websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-16 lg:py-24 bg-gray-100 scroll-element">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-[#A60000] mb-10 text-center">Responsive Web Development Course Outline</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-lg">
              <thead className="bg-[#FFB900] text-white">
                <tr>
                  <th className="p-4">Module</th>
                  <th className="p-4">Hours</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#A60000]">
                <tr className="border-b">
                  <td className="p-4">Introduction to HTML5 and CSS3</td>
                  <td className="p-4">16</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Responsive Design Principles</td>
                  <td className="p-4">32</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">JavaScript for Web Development</td>
                  <td className="p-4">40</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Working with ReactJS</td>
                  <td className="p-4">24</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Advanced CSS (Flexbox, Grid)</td>
                  <td className="p-4">16</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">eProject: Build a Responsive Website</td>
                  <td className="p-4">32</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">UI/UX Principles for Web</td>
                  <td className="p-4">16</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Total Hours</td>
                  <td className="p-4 font-bold">176</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Aptech Section */}
      <section className="py-16 lg:py-24 bg-white text-center scroll-element">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-[#A60000] mb-12">Why Choose Aptech for Web Development?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold mb-4 text-[#A60000]">Certified Instructors</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Learn from industry experts who have hands-on experience in the latest web technologies. Our certified instructors are committed to providing top-tier education.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold mb-4 text-[#A60000]">Hands-On Learning</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Our program is focused on practical, real-world projects that prepare you to build responsive websites and applications right from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-[#A60000] text-white text-center scroll-element">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Start Your Web Development Journey?</h2>
          <p className="text-lg font-light mb-12">
            Join Aptech’s Responsive Web Development course and gain the skills to succeed in the tech world. Build websites that look great on every device and provide top-notch user experiences.
          </p>
          <button className="bg-[#FFB900] text-black py-3 px-6 rounded-lg font-semibold transition hover:bg-white hover:text-[#A60000]">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveWebDevelopment;
