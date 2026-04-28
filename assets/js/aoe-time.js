/**
 * Age of Empires (AoE) World Time Display
 * 显示《帝国时代》(Age of Empires) 世界时间
 * 
 * 时间基准：UTC+8（北京时间/中国标准时间）
 * 更新频率：每秒更新一次
 * 显示格式：YYYY-MM-DD HH:mm:ss
 */

function updateAoETime() {
  // 获取当前时间，并将其转换为北京时间（UTC+8）
  const now = new Date();
  const utcMillis = now.getTime() + now.getTimezoneOffset() * 60000;
  const utc8Time = new Date(utcMillis + 8 * 3600000);
  
  // 格式化输出：YYYY-MM-DD HH:mm:ss
  const year = utc8Time.getFullYear();
  const month = String(utc8Time.getMonth() + 1).padStart(2, '0');
  const day = String(utc8Time.getDate()).padStart(2, '0');
  const hours = String(utc8Time.getHours()).padStart(2, '0');
  const minutes = String(utc8Time.getMinutes()).padStart(2, '0');
  const seconds = String(utc8Time.getSeconds()).padStart(2, '0');
  
  const timeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  // 在页面中更新时间显示元素
  const timeElement = document.getElementById('aoe-world-time');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// 立即更新一次，然后每秒更新一次
updateAoETime();
setInterval(updateAoETime, 1000);
