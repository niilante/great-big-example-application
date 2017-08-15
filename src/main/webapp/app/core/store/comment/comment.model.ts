import { Profile } from '../profile/profile.model';

export interface Comment {
    id: number;
    articleId: string;
    body: string;
    createdAt: string;
    author: Profile;
}

export const initialComment = {
    id: null,
    articleId: null,
    body: null,
    createdAt: null,
    author: null
};