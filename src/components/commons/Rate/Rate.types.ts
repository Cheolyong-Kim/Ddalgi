export interface IRateProps {
  isReadOnly?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}
