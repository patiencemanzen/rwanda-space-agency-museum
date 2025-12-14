export interface Exhibit {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

export enum GameState {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR
}