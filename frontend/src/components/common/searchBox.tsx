export const SearchBox = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search...'
      type='text'
      name='query'
      className='form-control my-3 w-50 container d-flex justify-content-center mt-50 mb-50'
    />
  )
}
