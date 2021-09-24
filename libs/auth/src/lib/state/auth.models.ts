/**
 * Interface for the 'Auth' data
 */
export interface AuthEntity {
  id: string | number; // Primary ID
  user: string;
}

export interface AuthUser {
  user: AuthEntity
}