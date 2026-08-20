function Services() {
    const services =[
        {
            day:"sunday",
            time:"9:00 am",
            name:"Morning Worship Sevice"
        },
        {
            day:"sunday",
            time:"11:00 am",
            name:"Sunday School"
        },
        {
            day:"wednesday",
            time:"7:00 pm",
            name: "Bible Study & Prayer"
        }


    ]

    return (
        <div className="container services-container">
            <h1>Worship Services & Schedule</h1> 
            <div className="services-grid">
            {services.map((s,i) => (
                <div className="service-card" key={i}>
                    <div>
                        <h3>{s.name}</h3>
                        <p>{s.day}</p>
                        
                    </div>

                    <p className="service-time">{s.time}</p>
                    </div>
            ))}
         </div>
        </div>
    )
}

export default Services;