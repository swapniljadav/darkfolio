'use client';

import { Briefcase, Building2, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Manager – IT',
      company: 'Bank of Baroda',
      location: 'Hyderabad Data Centre',
      duration: '2023 – Present',
      description:
        'Leading backend development and infrastructure for Aadhaar Vault, Account Aggregator, and KYC services.',
    },
    {
      title: 'Manager – IT',
      company: 'Bank of Baroda',
      location: 'Hyderabad',
      duration: '2019 – 2023',
      description:
        'Developed and maintained enterprise Java services for CBS operations, AEPS, and secure banking APIs.',
    },
    {
      title: 'Assistant Manager – IT',
      company: 'Bank of Baroda',
      location: 'Mumbai',
      duration: '2013 – 2019',
      description:
        'Started in CBS migration and evolved into core Java dev roles for Finacle integrations and backend tooling.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black text-white">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold text-center mb-16">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-purple-500">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-purple-500 rounded-full" />

            <div className="pl-4">
              <h3 className="text-xl font-bold font-sora flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                {exp.title}
              </h3>

              <p className="text-gray-400 font-inter text-sm flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4 text-gray-500" />
                {exp.company}
              </p>

              <p className="text-gray-400 font-inter text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                {exp.location}
              </p>

              <p className="text-purple-300 text-xs font-mono mt-1 mb-2">{exp.duration}</p>

              <p className="text-sm text-gray-300 font-inter leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
