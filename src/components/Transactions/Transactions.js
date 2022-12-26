import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.table} key={item.id}>
            <td className={css.data}>{item.type}</td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
