// 超过四位数的数字转化为w格式,如：38128 => 3.8w，381285 => 38.1w
export function formatCharCount(count) {
  if (count <= 0 || count.isNaN) {
    return '0';
  }
  const strCount = count.toString();
  if (strCount.length >= 9) {
    if (strCount.length >= 11) {
      return '99亿+';
    }
    let prefix = strCount.substring(0, strCount.length - 8);
    if (strCount.length === 9) {
      prefix = `${prefix}.${strCount[1]}`;
    }
    return `${prefix}亿`;
  }

  if (strCount.length >= 5) {
    let prefix = strCount.substring(0, strCount.length - 4);
    if (strCount.length === 5) {
      prefix = `${prefix}.${strCount[1]}`;
    }
    return `${prefix}万`;
  }
  return strCount;
}

export function TextNumber(props) {
  // eslint-disable-next-line react/prop-types
  const { num } = props;
  return <span style={{ fontSize: '12px' }}>{formatCharCount(num)}</span>;
}
