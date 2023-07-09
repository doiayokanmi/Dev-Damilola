import React from 'react'

const Education = () => {
    const schools = [
        {
            title: "SQI College Of ICT",
            cert: "Full Stack Development",
            img: "/image/SQI.png",
            year: "January, 2023 - November, 2023"
        },
        {
            title: "The Polytechnic, Ibadan",
            cert: "H. National Diploma in Computer Science",
            img: "/image/Polyibadan.png",
            year: "October, 2016 - November, 2018"
        },
        {
            title: "The Polytechnic, Ibadan",
            cert: "National Diploma in Computer Science",
            img: "/image/Polyibadan.png",
            year: "October, 2012 - November, 2014"
        }
    ]
  return (
    <>
        <div id="education">
        <h4 className='my-2'>Education <i class="fa-solid fa-graduation-cap"></i></h4>
        <div id="educationCon">
        {
            schools.map((sch, index) => (

            <div className='my-3' key={index} id="eduCard">
                <img className='img-fluid' width={"50px"} src={sch.img} alt="" />
                <h5>{sch.title}</h5>
                <h5>{sch.cert}</h5>
                <em>{sch.year}</em>
            </div>

            ))
        }

        </div>
        </div>
    </>
  )
}

export default Education