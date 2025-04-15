import { auth } from '@/config/firebase.config';
import axios , { AxiosResponse } from 'axios';
import { u } from 'node_modules/framer-motion/dist/types.d-B50aGbjN';


interface Chapter {
  id: number;
  chapterName: string;
  description: string;
  order: number;
}

interface Module {
  id: number;
  moduleName: string;
  description: string;
  estimatedTime: number | null;
  niveauId: number;
  isGlobal: boolean;
  createdAt: string;
  updatedAt: string;
  chapters: Chapter[];
}

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
export const fetchModuleById = async ( moduleId: number): Promise<Module> => {
    const userId = auth.currentUser?.uid; // Get the userId from Firebase auth
  try {
    const response: AxiosResponse<Module> = await axios.post(`http://localhost:3000/api/modules/${moduleId}`, {
      userId, // Send userId in the request body
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch module');
    } else {
      throw new Error('Network error: Unable to fetch module');
    }
  }
};

export const fetchChapterById = async (moduleId: number, chapterId: number): Promise<Chapter> => {
  const currentUser = auth.currentUser; // Get the current user from Firebase auth
  try {
    const response: AxiosResponse<Chapter> = await axios.post(
      `http://localhost:3000/api/modules/${moduleId}/chapters/${chapterId}`,
      {
        userId: currentUser?.uid, // Include userId in the request body
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch chapter');
    } else {
      throw new Error('Network error: Unable to fetch chapter');
    }
  }
};
export const fetchChapterContent = async (chapterId: number, moduleId: number): Promise<any> => {
    const userId = auth.currentUser?.uid; // Get the current user from Firebase auth
  try {
    const response = await axios.post(`http://localhost:3000/api/chapters/${chapterId}/${moduleId}`, 
        {
            userId  
        }
        );
    return response.data;
  } catch (error) {
    console.error('Error fetching chapter content:', error);
    throw error;
  }
};