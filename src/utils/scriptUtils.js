// const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchScripts = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/scripts/`);
        
        // Log the raw response text for debugging
        const rawText = await response.text();
        console.log('Raw response:', rawText);  // This will show the content of the response
        
        if (!response.ok) throw new Error('Network response was not ok');

        // Check if the response is JSON
        if (rawText.startsWith("<!DOCTYPE html>")) {
            throw new Error('Received HTML instead of JSON');
        }

        // Attempt to parse the response as JSON
        const data = JSON.parse(rawText);

        // If the API returns an empty array, fallback to the dummy data
        if (data.length === 0) {
            console.warn("API returned an empty response. Using fallback data.");
            return getDummyScripts();
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching scripts:', error);
        return getDummyScripts();  // Return dummy data on error
    }
};


// Dummy scripts data to use as fallback
const getDummyScripts = () => [
    {
        "script_id": 1,
        "title": "H-Zombie Dummy Script",
        "synopsis": "In a world where music has been silenced by a mysterious plague...",
        "user": { "id": 1, "email": "someone@gmail.com" },
        "genre": "Thriller | Action | Comedy",
        "total_likes": 4,
        "total_dislikes": 3,
        "google_doc_link": "https://docs.google.com/document/d/18MV2kD5uiIkXMZr9RYbDrlqpbAhOK9_Wp5BG4_Mic98/edit?usp=sharing",
        "pdf_file": null
    },

];
