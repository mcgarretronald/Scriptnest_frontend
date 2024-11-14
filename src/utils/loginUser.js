const baseUrl = import.meta.env.VITE_BASE_URL;

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${baseUrl}/api/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Error Data from Backend:", errorData);
            throw new Error(errorData.error);
        }

        const data = await response.json();
        console.log("Response Data from Backend:", data);
        return { status: 'success', data };

    } catch (error) {
        console.error("Login Error:", error.message);
        return { status: 'error', message: error.message };
    }
}
