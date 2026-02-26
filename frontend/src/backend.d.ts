import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface NewsItem {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    summary: string;
}
export interface UserProfile {
    name: string;
}
export interface SchoolContactInfo {
    email: string;
    address: string;
    phone: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addNewsItem(title: string, summary: string, content: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAdminMessages(): Promise<Array<ContactMessage>>;
    getAllMessages(): Promise<Array<ContactMessage>>;
    getAllNews(): Promise<Array<NewsItem>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<SchoolContactInfo>;
    getNewsById(_id: bigint): Promise<NewsItem | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactMessage(name: string, email: string, subject: string, message: string): Promise<void>;
}
