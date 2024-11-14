// utils/loginUser.js
export async function loginUser(email, password) {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json(); // Retrieve error details from backend
            console.log("Error Data from Backend:", errorData); // Log error for debugging
            throw new Error(errorData.error); // Access the error message correctly from the response
        }

        const data = await response.json();
        console.log("Response Data from Backend:", data); // Log successful response data
        return { status: 'success', data };

    } catch (error) {
        console.error("Login Error:", error.message); // Log error message
        return { status: 'error', message: error.message }; // Return error message
    }
}
