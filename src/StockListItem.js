const numeral = require('numeral');

function StockListItem(props) {
  
  const formatNumber = m => numeral(m).format('0,0.00');
  
  const { stock } = props;
  const purchaseValueStr = formatNumber(stock.purchaseValue);
  const currentValueStr = formatNumber(stock.currentValue);
  
  const purchasePriceStr = formatNumber(stock.purchasePrice);
  const currentPriceStr = formatNumber(stock.currentPrice);
  
  const profitStr = formatNumber(stock.profit);
  const profitClass = stock.profit < 0 ? 'loss' : 'profit';
  
  return (
    <tr>
      <td>{stock.ticker}</td>
      <td>{stock.name}</td>
      <td>{stock.shares}</td>
      <td className="money">{purchasePriceStr}</td>
      <td className="money">{purchaseValueStr}</td>
      <td className="money">{currentPriceStr}</td>
      <td className="money">{currentValueStr}</td>
      <td className={"money "+profitClass}>{profitStr}</td>
    </tr>
  );
}

export default StockListItem;
