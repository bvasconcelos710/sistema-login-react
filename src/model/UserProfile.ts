export interface UserProfile {
    "id": number;
    "name": string;
    "email": string;
    "is_active": boolean;
    "avatar": {
        "id": string;
        "high": string;
        "medium": string;
        "low": string;
    };
    "type": string;
    "created": Date;
    "modified": Date;
    "role": string;
}