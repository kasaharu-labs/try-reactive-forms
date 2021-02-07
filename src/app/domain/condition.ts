export interface Condition {
  id: number;
  condition: string;
}

export interface Flag {
  userId: number;
  categoryId: number;
}

export interface SearchCondition {
  userId: number;
  category: string;
  condition: string;
}
