/**
 * Age of Empires (AoE) World Time Display
 * 显示《帝国时代》(Age of Empires) 世界时间
 * 
 * 时间基准：UTC+8（北京时间/中国标准时间）
 * 更新频率：每秒更新一次
 * 显示格式：YYYY-MM-DD HH:mm:ss
 */

function formatBeijingTime(date) {
  const parts = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(date);

  const values = Object.fromEntries(parts.filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}:${values.second}`;
}

function updateAoETime() {
  const now = new Date();
  const timeString = formatBeijingTime(now);
  
  // 在页面中更新时间显示元素
  const timeElement = document.getElementById('aoe-world-time');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// 立即更新一次，然后每秒更新一次
updateAoETime();
setInterval(updateAoETime, 1000);
