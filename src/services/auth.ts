const BACKEND_URL = 'http://localhost:3000'; // Define the backend URL as a constant

interface RegistrationData {
    uid: string;
    userName: string;
    email: string;
    dob?: string;
    profile_picture?: File | null;
    Specialite: string;
    fullName: string;
    niveau: string; // Assuming niveau is a string from the Select component
}

export const sendRegistrationData = async (data: RegistrationData): Promise<Response> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/register`, { // Use the BACKEND_URL variable
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Error sending registration data to backend:', error);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
    } catch (error: any) {
        console.error('Error sending registration data:', error);
        throw error;
    }
};