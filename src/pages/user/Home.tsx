import React from 'react';

function Home() {
  return (
    <div className="text-white">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        1, 2, 3, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123,
        123, 123, 123, 123, 123, 123, 123, 123, 123, 123,
      ].map((r: any, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis
          nam minima aspernatur. Enim dolorem in praesentium laudantium, animi
          reiciendis corrupti expedita distinctio delectus dignissimos natus
          quae iusto autem placeat!
        </p>
      ))}
    </div>
  );
}

export default Home;
