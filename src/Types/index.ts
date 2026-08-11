
export interface GreetingProps {
  
  name: string;
}


export interface CounterState {
  count: number;
}

export interface CounterProps {
 
  initialCount?: number;
  
  onCountChange?: (newCount: number) => void;
}

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;