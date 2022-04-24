import { User } from "./user";
export interface UsersResponse {
        page: number;
        per_page: number;
        ftotal: number;
        total_page: number;
        data: User[];
    }
