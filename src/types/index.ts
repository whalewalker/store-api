export interface IUser extends Document {
    _id: string;
    email: string;
    password: string;
    name: string;
    role: 'user' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

export interface IProduct extends Document {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdBy: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserResponse {
    _id: string;
    email: string;
    name: string;
    role: string;
}

export interface ILoginResponse {
    user: IUserResponse;
    token: string;
}