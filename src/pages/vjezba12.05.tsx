const Vjezba1205 = () => {

  //ukoliko zelimo selektirati sve elemente (button) onda to radimo na ovaj nacin
  const klikni = (dugme: React.MouseEvent<HTMLButtonElement>) =>{
    console.log(dugme.currentTarget.innerText);
  }

  let btns = document.querySelectorAll('button');
  
  btns.forEach(function (btn){
    // Event listener koji ceka na klik, za svaki button
    btn?.addEventListener('click', function () {
      console.log('KLiknuo');
    });
  });

  
  return(
    <div>
      <button className="btn"></button>
      <button className="btn"></button>
    
    </div>
  )
};
export default Vjezba1205;
