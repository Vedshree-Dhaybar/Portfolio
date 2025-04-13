import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
            Hey! I'm an engineering student with a passion for web development and design. I love turning creative ideas into clean and responsive web experiences. While I work primarily with front-end tools like HTML, CSS, JavaScript, and React, I also enjoy designing with tools like Canva and exploring UI design through Figma. <br /> <br />
            I'm constantly learning, building, and experimenting — whether it's coding small projects, designing layouts, or diving into the latest web tech. I believe good design and functionality go hand in hand, and I'm always aiming to blend both in the things I create.

            </p>
            <p className="text-lg text-gray-600 mb-6">
              Outside of tech, I'm someone who values creativity, continuous learning, and collaboration. I'm excited about opportunities that help me grow and connect with others who are just as passionate about building cool things!
            </p>
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold text-gray-900">Experience</h3>
                <p className="text-gray-600">5+ Years</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
