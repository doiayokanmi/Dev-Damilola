import React from 'react'

const Education = () => {
    const schools = [
        {
            title: "The Polytechnic, Ibadan",
            cert: "Higher National Diploma in Computer Science",
            img: "/image/Polyibadan.png",
            year: "October, 2016 - November, 2018"
        },
        {
            title: "The Polytechnic, Ibadan",
            cert: "Higher National Diploma in Computer Science",
            img: "/image/Polyibadan.png",
            year: "October, 2016 - November, 2018"
        },
        {
            title: "The Polytechnic, Ibadan",
            cert: "Higher National Diploma in Computer Science",
            img: "/image/Polyibadan.png",
            year: "October, 2016 - November, 2018"
        }
    ]
  return (
    <>
        <h3>Education</h3>
        <div id="educationCon">
        {
            schools.map((sch, index) => (

            <div key={index} id="eduCard">
                <img className='img-fluid' width={"80px"} src={sch.img} alt="" />
                <h5>{sch.title}</h5>
                <strong>{sch.cert}</strong>
                <em>{sch.year}</em>
            </div>

            ))
        }

        </div>
    </>
  )
}

export default Education