import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Star, 
  TrendingUp,
  ChevronRight,
  Quote,
  Linkedin,
  Mail
} from 'lucide-react';

const LeadershipSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for sticky section
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.98]);

  const leadershipData = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Principal & Director",
      bio: "With over 25 years of experience in technical education, Dr. Sharma has been instrumental in shaping the vision of Krishna Engineering College.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Our mission is to create engineers who can solve real-world problems with innovation and integrity.",
      delay: 0.1
    },
    {
      name: "Prof. Sunita Verma",
      position: "Dean of Academics",
      bio: "A renowned scholar in Computer Science, Prof. Verma has published over 50 research papers and led numerous curriculum development initiatives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Education is not just about acquiring knowledge, but about learning how to think critically and creatively.",
      delay: 0.2
    },
    {
      name: "Dr. Amit Patel",
      position: "Head of Placements",
      bio: "Dr. Patel has established strong industry connections that have resulted in placement opportunities with top companies for our students.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "We prepare students not just for jobs, but for fulfilling careers where they can make meaningful contributions.",
      delay: 0.3
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky left side */}
          <motion.div 
            className="lg:w-2/5 lg:sticky lg:top-24 self-start"
            style={{ y, opacity, scale }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="inline-flex items-center justify-center text-blue-600 font-medium text-sm uppercase tracking-wide mb-6 py-2 px-5 bg-blue-100 rounded-full">
                <Star size={16} className="mr-2" />
                Leadership Philosophy
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Leadership</span> Team
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Krishna Engineering College, our leadership is committed to excellence, innovation, 
                and creating an environment where both students and faculty can thrive.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visionary Approach</h3>
                    <p className="text-gray-600">Guiding the institution with a clear vision for the future of engineering education.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Academic Excellence</h3>
                    <p className="text-gray-600">Fostering an environment of rigorous academic standards and continuous improvement.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Student Success</h3>
                    <p className="text-gray-600">Dedicated to nurturing talent and ensuring every student reaches their full potential.</p>
                  </div>
                </div>
              </div>

              <button className="mt-10 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-300">
                Meet Our Entire Team
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Scrollable right side with animations */}
          <div className="lg:w-3/5">
            <div className="space-y-12">
              {leadershipData.map((leader, index) => (
                <LeaderCard key={index} leader={leader} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeaderCard = ({ leader, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: leader.delay }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="relative">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <Quote size={24} />
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6 justify-center">
            <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
          <div className="inline-flex items-center text-blue-600 font-medium mb-6 py-1 px-3 bg-blue-100 rounded-full text-sm">
            {leader.position}
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
          
          <div className="bg-gray-50 p-5 rounded-xl mb-6 border-l-4 border-amber-500">
            <p className="text-gray-700 italic">"{leader.quote}"</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-medium py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Strategic Planning</span>
            <span className="text-xs font-medium py-1 px-3 bg-green-100 text-green-700 rounded-full">Curriculum Development</span>
            <span className="text-xs font-medium py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Industry Relations</span>
            <span className="text-xs font-medium py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Research Leadership</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadershipSection;