export type Json =
  | string        
  | number        
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Productos: {
        Row: {
          brand: string | null
          created_at: string
          description: string | null
          id: string
          price: number | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          description?: string | null
          id?: string
          price?: number | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          description?: string | null
          id?: string
          price?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}