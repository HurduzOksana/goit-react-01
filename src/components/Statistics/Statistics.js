import css from './Statistics.module.css';
import PropTypes from "prop-types";

export default function Statistics({ stats }) {
    return (
  <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList}>
          {stats.map(el => (
            
              <li className={css.item} key={el.id}>
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}%</span>
    </li> 
          ))}
      
  </ul>
</section>
    );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};