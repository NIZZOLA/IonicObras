import { User } from "./user";

export class LoginResponse {
    user: User;
    token: string;
    success: boolean;
    message: string;
}
