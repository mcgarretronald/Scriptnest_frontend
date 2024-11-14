// utils/registerUser.js

export async function registerUser({ email, password, role, profilePicture }) {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            body: formData, // Sending FormData to handle file upload
        });

        if (!response.ok) {
            const errorData = await response.json(); // Retrieve error details from backend
            console.log("Error Data from Backend:", errorData); // Log error for debugging
            const errorMessage = errorData.email ? errorData.email[0] : 'Registration failed';
            throw new Error(errorMessage); // Extract the first error from the array (if any)
        }

        const data = await response.json();
        console.log("Response Data from Backend:", data); // Log successful response data
        return { status: 'success', data };

    } catch (error) {
        console.error("Registration Error:", error.message); // Log error message
        return { status: 'error', message: error.message }; // Return error message
    }
}
