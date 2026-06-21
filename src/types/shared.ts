// ============================================================
// Belenay Mobilya - Ortak TypeScript Tip Tanımlamaları (Local Mock)
// Standalone build için @belenay/shared bağımlılığı kaldırıldı.
// ============================================================

export enum Role {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user',
  GUEST = 'guest',
}

export interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role | string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  name: string;
  image: string;
}
