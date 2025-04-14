import axios from 'axios';

export async function fetchAndDisplayModules(userId: number): Promise<{ relatedModules: any[]; globalModules: any[] }> {
  const apiUrl = 'http://localhost:3000/api/userModulesList';

  try {
    const response = await axios.post(apiUrl, { userId });
    const { relatedModules = [], globalModules = [] } = response.data;

    // Return the fetched data
    return { relatedModules, globalModules };
  } catch (error) {
    console.error('Error fetching modules:', error);
    // Return empty arrays in case of an error to avoid breaking the caller
    return { relatedModules: [], globalModules: [] };
  }
}