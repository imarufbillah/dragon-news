import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Coffee,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers - Dragon News",
  description:
    "Join the Dragon News team. Explore exciting career opportunities in journalism, technology, and media.",
};

const CareerPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses and annual reviews.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths with mentorship programs and skill development opportunities.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote work options, and generous paid time off.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented professionals in a supportive and inclusive environment.",
    },
    {
      icon: Briefcase,
      title: "Learning & Development",
      description:
        "Access to training programs, conferences, and continuous learning opportunities.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Investigative Journalist",
      department: "Editorial",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Lead investigative projects and mentor junior reporters. 5+ years of experience in investigative journalism required.",
    },
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain our web platform using React, Next.js, and modern web technologies. 3+ years of experience required.",
    },
    {
      title: "Data Journalist",
      department: "Editorial",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Analyze complex datasets and create compelling data-driven stories. Strong skills in data analysis and visualization required.",
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
      description:
        "Manage our social media presence across multiple platforms. 2+ years of experience in social media management required.",
    },
    {
      title: "Video Producer",
      department: "Multimedia",
      location: "Los Angeles, CA",
      type: "Full-time",
      description:
        "Produce engaging video content for digital platforms. Experience with video editing and storytelling required.",
    },
    {
      title: "Backend Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description:
        "Design and implement scalable backend systems. Experience with Node.js, databases, and cloud infrastructure required.",
    },
  ];

  const departments = [
    { name: "Editorial", count: 12 },
    { name: "Technology", count: 8 },
    { name: "Marketing", count: 5 },
    { name: "Operations", count: 6 },
    { name: "Multimedia", count: 4 },
  ];

  return (
    <main className="bg-dark-8 min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-hover text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Career at Dragon News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Join a team that&apos;s redefining modern journalism
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We&apos;re looking for passionate, talented individuals who want
              to make a difference through quality journalism and innovative
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4 text-center">
            Why Work With Us?
          </h2>
          <p className="text-lg text-dark-4 text-center mb-12 max-w-2xl mx-auto">
            We offer more than just a job – we offer a career where you can
            grow, make an impact, and be part of something meaningful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark-1 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-12 text-center">
            Open Positions by Department
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="card px-6 py-4 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-dark-1">
                    {dept.name}
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full">
                    {dept.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-12 text-center">
            Current Openings
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card p-6 md:p-8 hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-1 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-4">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary px-6 py-3 rounded-lg whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-dark-3 leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-12 text-center">
            Our Hiring Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Submit your application and resume online",
                },
                {
                  step: "2",
                  title: "Review",
                  description: "Our team reviews your application",
                },
                {
                  step: "3",
                  title: "Interview",
                  description: "Meet with our hiring team",
                },
                {
                  step: "4",
                  title: "Offer",
                  description: "Receive and accept your offer",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-dark-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re always looking for talented individuals. Send us your
              resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-dark-8 transition-all-smooth focus-ring text-lg">
                Send General Application
              </button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all-smooth focus-ring text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerPage;
