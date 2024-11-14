const baseUrl = import.meta.env.VITE_BASE_URL;

export async function postScript(formValues) {
    const formData = new FormData();

    // Append form fields
    formData.append('title', formValues.title);
    formData.append('google_doc_link', formValues.googleDocLink);
    formData.append('genre', formValues.genre);
    formData.append('synopsis', formValues.synopsis);

    // Append file if it exists
    if (formValues.pdfFile) {
        formData.append('pdf_file', formValues.pdfFile);
    }

    try {
        const response = await fetch(`${baseUrl}/api/scripts/`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json(); // Retrieve error details from backend
            console.log("Error Data from Backend:", errorData); // Log error for debugging
            throw new Error(
                errorData.title?.[0] || // Show title error if exists
                errorData.google_doc_link?.[0] || // Show google_doc_link error if exists
                errorData.genre?.[0] || // Show genre error if exists
                errorData.synopsis?.[0] || // Show synopsis error if exists
                "An error occurred while submitting the script."
            );
        }

        const data = await response.json(); // Parse success response
        console.log("Response Data from Backend:", data); // Log response for debugging
        return { status: 'success', data };
    } catch (error) {
        console.error("Submission Error:", error.message); // Log error message
        return { status: 'error', message: error.message }; // Return error message
    }
}
