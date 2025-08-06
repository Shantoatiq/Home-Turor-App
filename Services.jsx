import React from 'react';

const services = [
  { id: 1, title: 'English', desc: 'Grammar, Vocabulary, Speaking' },
  { id: 2, title: 'Mathematics', desc: 'Algebra, Geometry, Calculus' },
  { id: 3, title: 'Science', desc: 'Physics, Chemistry, Biology' },
];

const Services = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Subjects I Teach</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white p-4 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
