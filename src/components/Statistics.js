

export default function Statistics({ stats }) {
    return (
  <section className="statistics">
  <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {stats.map(el => (
            
              <li className="item" key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
    </li> 
          ))}
      
  </ul>
</section>
    );
}