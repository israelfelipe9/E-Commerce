type InputProps = {
  name: string;
  label: string;
  error?: string;
  type?: string;
  value?: string;
  onChange: (currentTarget: any) => void;
};

const Input = ({ name, label, error, ...rest }: InputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default Input
