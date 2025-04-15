const BACKEND_URL = 'http://localhost:3000'; // Define the backend URL as a constant

interface RegistrationData {
    uid: string;
    userName: string;
    email: string;
    password: string; 
    dob?: string;
    Specialite: string;
    fullName: string;
    niveau: string; 
}

export const sendRegistrationData = async (data: RegistrationData): Promise<Response> => {
    try {
        const formData = new FormData();
        formData.append('uid', data.uid);
        formData.append('fullName', data.fullName);
        formData.append('userName', data.userName);
        formData.append('email', data.email);
        formData.append('password', data.password); // Include password in the form data
        formData.append('specialite', data.Specialite); // Correct field name
        formData.append('niveau',data.niveau)
        if (data.dob) {
            formData.append('dob', data.dob);
        }

        const response = await fetch(`${BACKEND_URL}/api/register`, {
            method: 'POST',
            body: formData, // Send FormData object
        });

        if (!response.ok) {
            throw new Error(`Failed to register: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};