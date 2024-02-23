// Sample data (replace with your app data)
const appsData = [
    {
        name: 'SVCE-live bus tracking',
        imageUrl: 'app1.png',
        downloadLink: 'https://onedrive.live.com/download?resid=3B45E35DFCA6141B%21107&authkey=!AGXmHSlkZskZ30Y',
        description: 'This app shows live bus tracking for SVCE campus.'
    },
    
    // Add more app entries as needed
];

// Function to display apps
const downloadBtn = document.getElementById('download-btn');
const appSearchInput = document.getElementById('app-search');
const appList = document.getElementById('all-apps');

// Function to display apps
function displayApps() {
    appList.innerHTML = ''; // Clear the app list before displaying filtered apps

    const searchTerm = appSearchInput.value.toLowerCase();

    const matchingApps = appsData.filter((appData) =>
        appData.name.toLowerCase().includes(searchTerm) ||
        appData.description.toLowerCase().includes(searchTerm)
    );

    if (matchingApps.length > 0) {
        matchingApps.forEach((appData) => {
            // Create a card for each matching app
            const appCard = document.createElement('div');
            appCard.className = 'app-card';

            // Display app details
            appCard.innerHTML = `
                <img src="${appData.imageUrl}" alt="${appData.name}">
                <div class="app-details">
                    <h3 class="app-title">${appData.name}</h3>
                    <p class="app-description">${appData.description}</p>
                    <a class="download-btn" href="${appData.downloadLink}" target="_blank">Download</a>
                </div>
            `;

            appList.appendChild(appCard);
        });
    } else {
        // Display a message if no matching apps are found
        appList.innerHTML = '<p>No matching apps found.</p>';
    }
}

// Initial call to display apps
displayApps();

// Add an event listener for the input to handle real-time filtering
appSearchInput.addEventListener('input', displayApps);
