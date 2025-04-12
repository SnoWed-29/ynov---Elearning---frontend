const BACKEND_URL = 'http://localhost:3000'; // Backend URL

export interface Level {
    id: number;
    levelName: string;
}

export interface Speciality {
    id: number;
    specialityName: string;
}

export const fetchLevels = async (): Promise<Level[]> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/levels`);
        if (!response.ok) {
            throw new Error(`Failed to fetch levels: ${response.status}`);
        }
        const data = await response.json();
        return data.levels.map((level: any) => ({
            id: level.id,
            levelName: level.levelName,
        }));
    } catch (error) {
        console.error('Error fetching levels:', error);
        throw error;
    }
};

export const fetchSpecialities = async (levelId: number): Promise<Speciality[]> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/specialities?levelId=${levelId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch specialities: ${response.status}`);
        }
        const data = await response.json();
        return data.data.map((speciality: any) => ({
            id: speciality.id,
            specialityName: speciality.specialityName,
        }));
    } catch (error) {
        console.error('Error fetching specialities:', error);
        throw error;
    }
};