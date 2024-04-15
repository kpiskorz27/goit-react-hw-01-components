import React from 'react';
import './statistics.css';
function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="stats-title">{title}</h2>

      <ul className="stats-list">
        {stats.map(stat => {
          let style = { backgroundColor: 'white' };

          if (stat.percentage > 0) style.backgroundColor = 'paleturquoise';
          if (stat.percentage >= 15) style.backgroundColor = 'skyblue';
          if (stat.percentage >= 20) style.backgroundColor = 'steelblue';
          return (
            <li key={stat.id} className="item" style={style}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
