export type User = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  phone: string;
  username: string;
  accountType: string;
  role: string[];
  isDeleted: boolean;
  isActive: boolean;
  clients: string[];
  projectId: number;
};
