export const formatCurrency = (num) => {
  return `$${num?.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
};

export const formatPercentage = (num) => {
  return `${num?.toFixed(2)}%`;
};
