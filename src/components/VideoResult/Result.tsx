type ResultProps = {
  key: number;
};

export const Result = (props: ResultProps) => {
  return <div key={props.key}></div>;
};
