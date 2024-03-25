import * as FA6 from "react-icons/fa6";

export interface Group {
  label: string;
  icon: keyof typeof FA6;
  count: number;
  display: boolean;
  separator?: true;
}
