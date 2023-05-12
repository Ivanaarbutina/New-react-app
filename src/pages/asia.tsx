const Asia = () => {

  const [data, setData] = useState<>();

  const getAsia = ()=> {
    fetch(`https://restcountries.com/v3.1/region/america`)
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      console.log(data);
      setData(data); 
    })
  };
  return(
    <div>
      <h1>Asia</h1>
    </div>
  )
}
export default Asia;