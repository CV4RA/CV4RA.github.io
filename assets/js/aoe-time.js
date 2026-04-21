// AoE World Time Display
// Calculates and displays the Age of Empires world time (UTC+8 offset)
function updateAoETime() {
  // AoE世界时间基于UTC+8（北京时间）
  const now = new Date();
  const utc8Time = new Date(now.getTime() + (8 - now.getTimezoneOffset() / 60) * 3600000);
  
  // Format: YYYY年MM月DD日 HH:mm:ss
  const year = utc8Time.getFullYear();
  const month = String(utc8Time.getMonth() + 1).padStart(2, '0');
  const day = String(utc8Time.getDate()).padStart(2, '0');
  const hours = String(utc8Time.getHours()).padStart(2, '0');
  const minutes = String(utc8Time.getMinutes()).padStart(2, '0');
  const seconds = String(utc8Time.getSeconds()).padStart(2, '0');
  
  const timeString = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
  
  // Update the display element
  const timeElement = document.getElementById('aoe-world-time');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// Update time immediately and then every second
updateAoETime();
setInterval(updateAoETime, 1000);
