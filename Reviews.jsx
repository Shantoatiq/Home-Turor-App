import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const list = document.getElementById('review-list');
    const btn = document.getElementById('add-review-btn');

    btn.addEventListener('click', () => {
      const li = document.createElement('li');
      li.className = "p-2 bg-white mb-2 rounded shadow";
      li.innerText = "Another happy student!";
      list.appendChild(li);
    });
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
      <ul id="review-list" className="mb-4 space-y-2">
        <li className="p-2 bg-white rounded shadow">"Amazing teacher!"</li>
      </ul>
      <button id="add-review-btn" className="btn btn-primary">
        Add Review
      </button>
    </section>
  );
};

export default Reviews;

