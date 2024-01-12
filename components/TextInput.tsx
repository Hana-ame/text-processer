// import '@/styles/TextInput.module.css'
  
export default function TextInput({ onChange, value, rows=4 }) {
  // const [text, setText] = useState('');

  return (
    // <input 
    //   className="resize border rounded-md w-full"
    //   type="text" 
    //   value={value} 
    //   onChange={handleTextChange} 
    // />
    <textarea
      className="resize border rounded-md w-full"
      rows={rows} cols={50}
      value={value} onChange={e => onChange(e.target.value)}
    >
    </textarea>

  )
}
