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
    {
        "script_id": 2,
        "title": "Mystery of the Silent City",
        "synopsis": "A detective navigates a city where sound has vanished...",
        "user": { "id": 2, "email": "detective@city.com" },
        "genre": "Mystery | Drama",
        "total_likes": 10,
        "total_dislikes": 1,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 3,
        "title": "Echoes of the Forgotten",
        "synopsis": "A musician on a quest to rediscover lost melodies...",
        "user": { "id": 3, "email": "musician@echoes.com" },
        "genre": "Drama | Fantasy",
        "total_likes": 7,
        "total_dislikes": 0,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 4,
        "title": "Symphony of the Shadows",
        "synopsis": "In a dystopian future, one person dares to bring music back...",
        "user": { "id": 4, "email": "rebel@shadows.com" },
        "genre": "Sci-Fi | Thriller",
        "total_likes": 15,
        "total_dislikes": 2,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 5,
        "title": "The Last Note",
        "synopsis": "In a silent world, a composer strives to create the final symphony...",
        "user": { "id": 5, "email": "composer@lastnote.com" },
        "genre": "Adventure | Drama",
        "total_likes": 12,
        "total_dislikes": 1,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 6,
        "title": "H-Zombie Dummy Script",
        "synopsis": "In a world where music has been silenced by a mysterious plague...",
        "user": { "id": 1, "email": "someone@gmail.com" },
        "genre": "Thriller | Action | Comedy",
        "total_likes": 4,
        "total_dislikes": 3,
        "google_doc_link": "https://docs.google.com/document/d/18MV2kD5uiIkXMZr9RYbDrlqpbAhOK9_Wp5BG4_Mic98/edit?usp=sharing",
        "pdf_file": null
    },
    {
        "script_id": 7,
        "title": "Mystery of the Silent City",
        "synopsis": "A detective navigates a city where sound has vanished...",
        "user": { "id": 2, "email": "detective@city.com" },
        "genre": "Mystery | Drama",
        "total_likes": 10,
        "total_dislikes": 1,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 8,
        "title": "Echoes of the Forgotten",
        "synopsis": "A musician on a quest to rediscover lost melodies...",
        "user": { "id": 3, "email": "musician@echoes.com" },
        "genre": "Drama | Fantasy",
        "total_likes": 7,
        "total_dislikes": 0,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 9,
        "title": "Symphony of the Shadows",
        "synopsis": "In a dystopian future, one person dares to bring music back...",
        "user": { "id": 4, "email": "rebel@shadows.com" },
        "genre": "Sci-Fi | Thriller",
        "total_likes": 15,
        "total_dislikes": 2,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    },
    {
        "script_id": 10,
        "title": "The Last Note",
        "synopsis": "In a silent world, a composer strives to create the final symphony...",
        "user": { "id": 5, "email": "composer@lastnote.com" },
        "genre": "Adventure | Drama",
        "total_likes": 12,
        "total_dislikes": 1,
        "google_doc_link": "https://docs.google.com/document/d/example",
        "pdf_file": null
    }
];