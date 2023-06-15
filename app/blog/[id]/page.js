
const getid = async(id) =>{
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json()
}


const productsdetails = async({params}) => {
  const {id} = params;
  const data = await getid(id)
  const {title, description} = data;
  console.log(data);
  return (
    <div>

      <h1 className="text-center text-primary mt-3">{title}</h1>
      <p className="text-center fw-bold text-warning">{description}</p>
    </div>
  )
}

export default productsdetails

























