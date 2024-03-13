const 
CPU_USAGE = document.getElementById("cpu"),
CLOSE_BTN = document.getElementById("close"),
updateStats = async () => {
    const usage = await api.getCurrentLoad()
    const cpuUsed = usage.currentLoad;
    CPU_USAGE.innerText = `CPU: ${cpuUsed.toFixed(2)} %`;
};

// Close event
CLOSE_BTN.addEventListener("click", api.close);

// Update Stats
setInterval(updateStats,1500)



