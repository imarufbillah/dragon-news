import Image from "next/image";
import { Award, Users, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us - Dragon News",
  description: "Learn about Dragon News - Journalism Without Fear or Favour. Our mission, values, and commitment to delivering quality news.",
};

const AboutPage = () => {
  const stats = [
    { label: "Daily Readers", value: "2M+", icon: Users },
    { label: "Countries Reached", value: "150+", icon: Globe },
    { label: "News Categories", value: "10+", icon: TrendingUp },
    { label: "Years of Excellence", value: "15+", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of journalistic integrity, ensuring accuracy and fairness in every story we publish.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Breaking news as it happens. Our team works around the clock to bring you the latest updates from around the world.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning journalism that sets the standard. We're committed to delivering quality content that matters.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of informed citizens. We believe in the power of knowledge to transform society.",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "James Chen",
      role: "Managing Editor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Investigations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Thompson",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <main className="bg-dark-8 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-hover text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Dragon News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Journalism Without Fear or Favour
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              For over 15 years, Dragon News has been at the forefront of independent journalism, 
              delivering unbiased, accurate, and timely news to millions of readers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-1 mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-4 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-8 text-center">
              Our Mission
            </h2>
            <div className="card p-8 md:p-12">
              <p className="text-lg text-dark-2 leading-relaxed mb-6">
                At Dragon News, we believe that quality journalism is the cornerstone of a healthy democracy. 
                Our mission is to provide our readers with accurate, unbiased, and comprehensive news coverage 
                that empowers them to make informed decisions.
              </p>
              <p className="text-lg text-dark-2 leading-relaxed mb-6">
                We are committed to investigating the stories that matter, holding power to account, and giving 
                voice to the voiceless. Our team of dedicated journalists works tirelessly to bring you the truth, 
                no matter where it leads.
              </p>
              <p className="text-lg text-dark-2 leading-relaxed">
                In an era of misinformation and fake news, we stand as a beacon of truth and reliability. 
                Every story we publish undergoes rigorous fact-checking and editorial review to ensure the 
                highest standards of accuracy and fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark-1 mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4 text-center">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-dark-4 text-center mb-12 max-w-2xl mx-auto">
            Our experienced team of journalists and editors brings decades of combined experience 
            in delivering world-class news coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card overflow-hidden group hover-lift">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dark-1 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a team that's shaping the future of journalism. 
              Explore career opportunities at Dragon News.
            </p>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-dark-8 transition-all-smooth focus-ring text-lg"
            >
              View Career Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
