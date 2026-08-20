function Events () {
    const events =[
        {
            title:"Community Outreach",
            date:"aug 25, 2026",
            desc:"Join us as we serve meals to the homeless downtown"
        },

        {
            title:"Youth Camp 2026",
            date:"sep 10-12, 2026",
            desc:"3 days of Faith, fun and fellowship for teens aged 13-18"
        },

       
        {
            title:"Womens Fellowship",
            date:"sept 25, 2026",
            desc:"An inspiring gathering for womens to connect share and grow in faith"
        },

        {
            title:"Bible study gathering",
            date:"oct 25, 2026",
            desc:"Explore God's word together and deepen your understandig of faith"
        }

    ]

    return(
        <div className="container events-container">
            <h1>Upcoming Events</h1>
            <div className="events-grid">
                {events.map((e,i) => (
                    <div className="event-card" key={i}>
                        <h3>{e.title}</h3>
                        <p className="event-date">
                            {e.date}
                        </p>

                    <p>{e.desc}</p>
            </div>
                ))}
            </div>
        </div>
    )
}

export default Events;