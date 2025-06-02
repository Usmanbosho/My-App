const statusBar = document.getElementById('connection-status');
    const statusText = document.getElementById('status-text');
    let hideTimeout;
  
    function updateConnectionStatus() {
      clearTimeout(hideTimeout); // Reset any existing timeout
      statusBar.style.display = 'block';
  
      if (navigator.onLine) {
        statusBar.className = 'status-bar online';
        statusText.textContent = 'Connection Active';
      } else {
        statusBar.className = 'status-bar offline';
        statusText.textContent = 'No Connection';
      }
  
      // Auto-hide after 3 seconds
      hideTimeout = setTimeout(() => {
        statusBar.style.display = 'none';
      }, 2500);
    }
  
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
  
    // Initial check
    updateConnectionStatus();