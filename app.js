// Sample data (replace with your app data)
const appsData = [
    {
        name: 'SVCE-live bus tracking',
        imageUrl: 'app1.png',
        downloadLink: 'https://onedrive.live.com/download?resid=3B45E35DFCA6141B%21107&authkey=!AGXmHSlkZskZ30Y'
    },
    
    // Add more app entries as needed
];

// Function to display apps
function displayApps() {
    const appList = document.getElementById('all-apps');

    appsData.forEach((appData) => {
        // Create a card for each app
        const appCard = document.createElement('div');
        appCard.className = 'app-card';

        // Display app details
        appCard.innerHTML = `
            <img src="${appData.imageUrl}" alt="${appData.name}">
            <div class="app-details">
                <h3>${appData.name}</h3>
                <a class="download-btn" href="${appData.downloadLink}" target="_blank">Download</a>
            </div>
        `;

        appList.appendChild(appCard);

        // Add download animation on button click
        const downloadBtn = appCard.querySelector('.download-btn');
        downloadBtn.addEventListener('click', function() {
            // Add the 'downloading' class to trigger the animation
            downloadBtn.classList.add('downloading');

            // Simulate a delay for the download process
            setTimeout(function() {
                // Remove the 'downloading' class after the delay
                downloadBtn.classList.remove('downloading');
            }, 1500); // Adjust the time to match the animation duration
        });
    });
}

// Initial call to display apps
displayApps();
